import React, { useState } from 'react';
import styles from './style.module.css';
import axios from 'axios';

const RadioCheckbox = ({ task, task_id }) => {
  const [isChecked, setIsChecked] = useState(task.isDone);
  // Function to update the server with the new task status
  const updateTaskStatus = (task_id, status) => {
    const url = `/api/tasks/${task_id}`;
    const headers = {
      Authorization: 'Bearer yourAuthToken',
    };

    // Send the PUT request to update the task status on the server
    axios
      .put(url, { isDone: status }, { headers })
      .then((response) => {
        console.log(`Task ${task_id} status updated: ${status}`);
      })
      .catch((error) => {
        console.error('Error updating task status:', error);
      });
  };

  const handleChange = () => {
    // Toggle the checkbox state
    setIsChecked((prevChecked) => !prevChecked);

    // Call the updateTaskStatus function to update the server with the new task status
    updateTaskStatus(task_id, !isChecked);
  };

  return (
    <label className={isChecked ? styles.checked : styles.notChecked}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {task.details}
    </label>
  );
};

export default RadioCheckbox;
