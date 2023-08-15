import React, { useState } from 'react';

const Input = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            value={inputValue}
            onChange={handleInputChange}
        />
    )
}

export default Input;