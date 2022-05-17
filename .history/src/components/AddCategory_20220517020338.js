import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hola Mundo')

    const handleAdd = (e) => {
        // setCategories([...categories, 'Nueva Categoria'])

        
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
