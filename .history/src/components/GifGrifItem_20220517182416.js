import React from 'react'


export const GifGrifItem = ({ id, title, url}) => {
   
    return (
        <div>
            <img src={url} alt={title}/>
            <p>{ title }</p>
        </div>
    )
}
