import React from 'react'


export const GifGrifItem = ({ id, title, url}) => {
   
    return (
        <div className=''>
            <img src={url} alt={title}/>
            <p>{ title }</p>
        </div>
    )
}
