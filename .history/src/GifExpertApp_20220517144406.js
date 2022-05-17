import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Star Wars'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Nueva Categoria'])

    //     // callback con param el estado anterior y return del nuevo
    //     setCategories(cats => [...cats, 'Nueva Categoria'])
    // }


    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCat={setCategories} />
            <hr/>  

            <ol>
                {categories.map(category => 
                    //las listas deben llevar la prop key
                    <Gig
                )}
            </ol>
        </>
    )
}


export default GifExpertApp