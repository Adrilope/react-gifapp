import React from 'react'
import { GifGrifItem } from './GifGrifItem'

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category)


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {(if (loading) {
                
            } else {
                
            })}

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

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
