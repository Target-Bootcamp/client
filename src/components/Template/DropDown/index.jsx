import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import {PiPencilLineDuotone} from 'react-icons/pi'
import {AiFillDelete} from 'react-icons/ai'
const DropdownButton = ({setSelect}) => {
  // האם להציג תפריט בחירה או שלא
  const [isOpen, setIsOpen] = useState(false);
  // לפה הולכת הבחירה 
  const [selectedOption, setSelectedOption] = useState([]);
  setSelect(selectedOption.value)
  
  const dropdownRef = useRef(null);

  const options = [
    { id: 1, name: <PiPencilLineDuotone/>, value: 'edit' },
    { id: 2, name: 'action', value: 'action' },
    { id: 3, name: <AiFillDelete/>, value: 'delete' }
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles['dropdown-frame']}>
        <button className={styles['dropdown-button']} onClick={handleToggle}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </button>
      </div>
      {isOpen && (
        <div className={styles['dropdown-menu']}>
          {options.map((option) => (
            <div
              className={styles.option}
              key={option.id}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
