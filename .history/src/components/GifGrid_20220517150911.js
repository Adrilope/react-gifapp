import React, { useState } from 'react'


export const GifGrid = ({ category }) => {

    useState

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=ibai&limit=10&api_key=9g3frzdHb0gDWMQok1WeJXI7OX2bVpyE'
        const resp = await fetch(url)
        const { data } = await resp.json()
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                tittle:img.title,
                url: img.images?.downsized_medium.url       // ?: por si no tiene images
            }
        })

        console.log(gifs)
    }

    getGifs()

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}