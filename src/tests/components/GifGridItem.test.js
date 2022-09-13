import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { GifGridItem } from '../../components/GifGridItem'


describe('Tests in GifGridItem component', () => {

    const title = 'Un titulo'
    const url = 'https://localhost/algo.jpg'

    let wrapper = shallow(<GifGridItem title={title} url={url}/>)


    test('must render <GifGridItem /> with props', () => {
        expect(wrapper).toMatchSnapshot()
    })


    test('must have a p with title', () => { 
        const p = wrapper.find('p')

        expect(p.text().trim()).toBe(title)
    })


    test('should have the image with the props value of the alt & url', () => { 
        const img = wrapper.find('img')

        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    
    test('should have animate__fadeInUp', () => { 
        const div = wrapper.find('div')
        const className = div.prop('className')
        
        expect(className.includes('animate__fadeInUp')).toBe(true)
    })
})