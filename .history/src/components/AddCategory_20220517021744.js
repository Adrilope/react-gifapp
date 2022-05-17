import React, {useState} from 'react'

export const AddCategory = ({ set }) => {

    const [inputValue, setinputValue] = useState('')


    console.log(set)

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()  
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
