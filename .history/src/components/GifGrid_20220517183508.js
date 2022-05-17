import React, { useState, useEffect } from 'react'
import { GifGrifItem } from './GifGrifItem'


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])


    


    useEffect(() => {
        getGifs
    }, [])


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
