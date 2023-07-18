import React, { useState } from 'react';
import styles from './style.module.css'


const RadioCheckbox = ({isDone}) => {
  const [isChecked, setIsChecked] = useState(isDone);
  const handleChange = () => {
    setIsChecked(!isChecked)
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
    </label>
  );
};

export default RadioCheckbox;