import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import GifExpertApp from '../GifExpertApp';


describe('Tests with <GifExpertApp />', () => { 
    
    test('should render GifExpertApp correctly', () => { 
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot()
    })


    test('should show a list of categories', () => { 
        const categories = ['Bad Bunny', 'Ibai']

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
})