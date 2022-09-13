import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { AddCategory } from '../../components/AddCategory'


describe('Tests with <AddCategory />', () => { 
    // const setCategories = () => {}
    const setCategories = jest.fn()

    let wrapper = shallow(<AddCategory setCat={setCategories} />)


    beforeEach(() => {
        jest.clearAllMocks()    // clean simulates
        wrapper = shallow(<AddCategory setCat={setCategories} />)
    })


    test('should render AddCategory correctly', () => { 
        expect(wrapper).toMatchSnapshot()
    })


    test('should change the input text', () => { 
        const input = wrapper.find('input')
        const value = 'Hola Mundo'

        // input.simulate('change', {
        //     target: {
        //         value: value
        //     }
        // })

        // el segundo arg, los elementos que van a ser transformados en el event
        input.simulate('change', {target: { value }})
        
        expect(wrapper.find('p').text().trim()).toBe(value)
    })


    test('should not submit the info', () => { 
        wrapper.find('form').simulate('submit', {preventDefault: () => {}})  // simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call setCategories and clean the input text', () => { 
        const input = wrapper.find('input')
        const value = 'Hola'


        input.simulate('change', {target: { value }})

        wrapper.find('form').simulate('submit', {preventDefault: () => {}})  

        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)  // llamada una vez
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))    // que se llame una Function dentro de setCategories 

        
        expect(input.prop('value')).toBe('')
    })
})