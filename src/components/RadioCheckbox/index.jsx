import React, { useState } from 'react';
import styles from './style.module.css';
import axios from 'axios';

const RadioCheckbox = ({ isDone, taskId }) => {
  const [isChecked, setIsChecked] = useState(isDone);

  // Function to update the server with the new task status
  const updateTaskStatus = (taskId, status) => {
    const url = `/api/tasks/${taskId}`;
    const headers = {
      Authorization: 'Bearer yourAuthToken',
    };

    // Send the PUT request to update the task status on the server
    axios
      .put(url, { isDone: status }, { headers })
      .then((response) => {
        console.log(`Task ${taskId} status updated: ${status}`);
      })
      .catch((error) => {
        console.error('Error updating task status:', error);
      });
  };

  const handleChange = () => {
    // Toggle the checkbox state
    setIsChecked((prevChecked) => !prevChecked);

    // Call the updateTaskStatus function to update the server with the new task status
    updateTaskStatus(taskId, !isChecked);
  };

  return (
      <label className={isChecked ? styles.checked : styles.notChecked}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      
    </label>
  );
};

export default RadioCheckbox;
