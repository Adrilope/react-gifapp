import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hola Mundo')

    const handleAdd = (e) => {
        // setCategories([...categories, 'Nueva Categoria'])

        // callback con param el estado anterior y return del nuevo
        setinputValue(cats => [...cats, 'Nueva Categoria'])
    }
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
