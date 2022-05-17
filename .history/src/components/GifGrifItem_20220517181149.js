import React from 'react'


export const GifGrifItem = ({ id, title, url}) => {
   
    return (
        <>
            <img src={url} alt={title}/>
            
        </>
    )
}
