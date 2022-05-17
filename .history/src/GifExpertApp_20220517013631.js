import React from "react"

const GifExpertApp = () => {

    const [categories, setCategories]


    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />

            <ol>
                {categories.map(category => {
                    //las listas deben llevar la prop key
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}


export default GifExpertApp