import React from 'react'


export const GifGrifItem = ({ id, title, url}) => {
   
    return (
        <div className='card animate__animated animate__fadeInUp animate__slow'>
            <img src={url} alt={title}/>
            <p>{ title }</p>
        </div>
    )
}
