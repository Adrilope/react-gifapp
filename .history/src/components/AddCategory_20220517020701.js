import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('')

    const handleAdd = (e) => {
        console.log(e.target.value)
        setinputValue(cats => [...cats, e.target.value])
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
