// import React, { useState, useEffect } from 'react'
// import { GifGrifItem } from './GifGrifItem'

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {


    const {data, loading} = useFetchGifs()



    return (
        <>
            <h3>{category}</h3>

            { loading ? 'Cargando...' : 'Data Cargada'}
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
