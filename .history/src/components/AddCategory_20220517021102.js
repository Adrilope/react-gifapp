import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }


    const handleSubmit = (e) => {
        // e.preventDefault()
        console.log('submit')
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
