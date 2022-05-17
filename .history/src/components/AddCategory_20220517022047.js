import React, {useState} from 'react'

export const AddCategory = ({ set }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        console.log(typeof )
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()  
        setCategories([...categories, inputValue])
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
