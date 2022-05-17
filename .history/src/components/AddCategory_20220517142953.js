import React, {useState} from 'react'

export const AddCategory = ({ set }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()  
        if (inputValue.trim().length > 2) {
            set((cat) => [...cat, inputValue])
        }
        setinputValue
    }


    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
