import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hola Mundo')

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Nueva Categoria'])

    //     // callback con param el estado anterior y return del nuevo
    //     setCategories(cats => [...cats, 'Nueva Categoria'])
    // }
    return (
        <>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleAdd }
            />
        </>
    )
}
