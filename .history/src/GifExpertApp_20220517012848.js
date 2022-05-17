import React from "react"

const GifExpertApp = () => {

    const categories = ['Star Wars', 'CR7', 'IlloJuan']


    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>
            
            <ol>
                { 
                    categories.map(category => {
                        return 
                    }) 
                }
            </ol>
        </>
    )
}


export default GifExpertApp