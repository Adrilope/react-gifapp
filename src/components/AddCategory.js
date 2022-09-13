import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()  

        if (inputValue.trim().length > 2) {
            onNewCategory(inputValue.trim())
            setinputValue('')
        }
    }


    return (
        <form onSubmit={ handleSubmit }>
            <p>{inputValue}</p>
            <input 
                placeholder='Search gifs'
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired
}
