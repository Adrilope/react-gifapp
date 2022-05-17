import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }


    const handle

    return (
        <>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </>
    )
}
