import React from 'react'


export const GifGrid = ({ category }) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=illojuan&limit=10&api_key=9g3frzdHb0gDWMQok1WeJXI7OX2bVpyE'

        const resp = await fetch(url)
        const data = await 
    }

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
