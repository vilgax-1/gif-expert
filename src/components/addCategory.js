import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Addcategory = ({setCategories}) => {
    const [inputValue, setInputValue] =  useState('');
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2 ){
            setCategories(popo => [inputValue]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value = {inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

Addcategory.propTypes = {
    setCategories: PropTypes.func.isRequired 
}

export default Addcategory
