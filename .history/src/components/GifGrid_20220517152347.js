import React, { useState, useEffect } from 'react'


export const GifGrid = ({ category }) => {


    const [images, setImages] = useState([])


    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=ibai&limit=10&api_key=9g3frzdHb0gDWMQok1WeJXI7OX2bVpyE'
        const resp = await fetch(url)
        const { data } = await resp.json()
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title:img.title,
                url: img.images?.downsized_medium.url       // ?: por si no tiene images
            }
        })

        console.log(gifs)
        setImages(gifs)
    }


    useEffect(() => {
        getGifs()
    }, [])



    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {images.map({img} => 
                    <li key={img.id}>{ img.title }</li>
                )}
                
            </ol>
        </div>
    )
}
