import React from "react"

const GifExpertApp = () => {

    const categories = ['Star Wars', 'CR7', 'IlloJuan']


    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>
            
            <ol>
                { 
                    categories.map((category, i) => <li key={}>{category}</li>) 
                }
            </ol>
        </>
    )
}


export default GifExpertApp