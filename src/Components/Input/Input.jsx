import React, { useState } from 'react';
import './Input.css';

const Input = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    setSearch(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Input;