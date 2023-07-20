import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';

const DropdownButton = ({ setSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const dropdownRef = useRef(null);

  const options = [
    { id: 1, name: 'edit', value: 'edit' },
    { id: 2, name: 'action', value: 'action' },
    { id: 3, name: 'delete', value: 'delete' }
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
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedOption) {
      setSelect(selectedOption.value);
    }
  }, [selectedOption, setSelect]);

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
