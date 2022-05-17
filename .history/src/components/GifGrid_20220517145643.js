import React from 'react'


export const GifGrid = ({ category }) => {

    const getGifs = () => {
        const url = api.giphy.com/v1/gifs/search?q=illojuan&limit=10&api_key=9g3frzdHb0gDWMQok1WeJXI7OX2bVpyE
    }

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
