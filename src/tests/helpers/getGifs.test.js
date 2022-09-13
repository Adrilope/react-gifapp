import '@testing-library/jest-dom'
import { getGifs } from '../../helpers/getGifs'



describe('Tests in the function fetch getGifs', () => { 

    test('should return 10 elements', async () => { 
        const gifs = await getGifs('Bad Bunny')

        expect(gifs.length).toBe(10)
    })


    test('should return [] by not passing a category', async () => { 
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)
    })
})