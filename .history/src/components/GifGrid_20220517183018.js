import React, { useState, useEffect } from 'react'
import { GifGrifItem } from './GifGrifItem'


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])


    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=9g3frzdHb0gDWMQok1WeJXI7OX2bVpyE`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title:img.title,
                url: img.images?.downsized_medium.url     // ?: por si no tiene images
            }
        })

        setImages(gifs)
    }


    useEffect(() => {
        getGifs()
    }, [getGifs])


    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                
                {images.map((img) => 
                    <GifGrifItem  
                        key={img.id} 
                        {...img}        // le pasamos como obj todos los props de img, parecido a img={img}
                    /> 
                )}

            </div>
        </>
    )
}
