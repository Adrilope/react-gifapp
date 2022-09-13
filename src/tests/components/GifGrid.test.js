import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
// indicamos donde estan los datos que vamos a mockear
jest.mock('../../hooks/useFetchGifs')


describe('Tests with <GifGrid />', () => { 
    const category = 'Bad Bunny'


    test('should render GifGrid correctly', () => { 
        // mockeamos los datos necesarios para simular la situcion de este test
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot()
    })


    test('should show the items when they`re loaded', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category}/>)

        // expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    })

})