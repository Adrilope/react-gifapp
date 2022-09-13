// import React from 'react'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'

import { useFetchGifs } from '../../hooks/useFetchGifs'


describe('Tests with useFetchGifs hook', () => { 

    test('should return the initial state', async () => { 
        // const { data, loading } = useFetchGifs('Bad Bunny')    no se pueden probar hooks de manera nativa

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Bad Bunny'))
        const { data, loading } = result.current

        await waitForNextUpdate()
        
        expect(data).toEqual([])
        expect(loading).toBe(true)      // lo mismo que .toBeTruthy()
    })


    test('should retorn an array of images and false loading', async () => { 
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Bad Bunny'))
        await waitForNextUpdate()

        const { data, loading } = result.current

        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })

})