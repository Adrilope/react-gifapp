import React from 'react'


export const GifGrifItem = ({ id, title }) => {

    return (
        <li key={id}>
            {title}
        </li>
    )
}
