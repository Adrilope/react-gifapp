import React, { useState } from "react"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Star Wars', 'CR7', 'IlloJuan'])

    const handleAdd = () => {
        console.log(categories.concat())
        // setCategories(categories.push('Nueva Categoria'))
    }


    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

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