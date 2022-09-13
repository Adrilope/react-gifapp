import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories)


    const handleAdd = (category) => {
        if (categories.includes(category)) return 

        setCategories(cats => [category, ...cats])
    }


    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory onNewCategory={(value) => handleAdd(value)} />
            <hr/>

            {categories.map(category => 
                //las listas deben llevar la prop key
                <GifGrid
                    category={category}
                    key={category} 
                />
            )}
        </>
    )
}


export default GifExpertApp