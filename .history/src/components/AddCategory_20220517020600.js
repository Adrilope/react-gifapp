import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hola Mundo')

    const handleAdd = (e) => {
        console.log(e.taget.vla)
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