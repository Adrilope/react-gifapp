import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hola Mundo')

    const handleAdd = (e) => {
        // setinputValue(cats => [...cats, e])
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
