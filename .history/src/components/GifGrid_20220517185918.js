// import React, { useState, useEffect } from 'react'
// import { GifGrifItem } from './GifGrifItem'

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {


    const { data, loading } = useFetchGifs(category)



    return (
        <>
            <h3>{category}</h3>

            <div className='card-grid'>
                
                {data.map((img) => 
                    <GifGrifItem  
                        key={img.id} 
                        {...img}        // le pasamos como obj todos los props de img, parecido a img={img}
                    /> 
                )}

            </div>
        </>
    )
}
