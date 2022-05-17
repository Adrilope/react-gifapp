// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs'
// import { GifGrifItem } from './GifGrifItem'

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])


    const {data, loading} = useFetchGifs()


    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])


    return (
        <>
            <h3>{category}</h3>

            { loading }
            {/* <div className='card-grid'>
                
                {images.map((img) => 
                    <GifGrifItem  
                        key={img.id} 
                        {...img}        // le pasamos como obj todos los props de img, parecido a img={img}
                    /> 
                )}

            </div> */}
        </>
    )
}
