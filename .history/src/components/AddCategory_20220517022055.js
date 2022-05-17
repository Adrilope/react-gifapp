import React, {useState} from 'react'

export const AddCategory = ({ set }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        console.log(typeof e.target.value)
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()  
        set([...categories, inputValue])
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
