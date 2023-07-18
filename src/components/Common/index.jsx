
import styles from './style.module.css'
import React, { useState } from 'react';

// props : 
// creator: zvi miler
function Common({ stet, setStet, style = {}, ...props }) {

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation()
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation()
    const file = e.dataTransfer.files[0];
    setStet(prev => [...prev, file])

  }

  const handleFile = (e) => {
    e.preventDefault;
    const file = e.target.files[0];
    setStet(prev => [...prev, file])
  }

  return (
    <div className={`center ${styles.name}`} style={style} {...props} onDrop={handleDrop} onDragOver={handleDragOver}>


      <div  >
        <h3>גרור קבצים לכאן</h3>
        <p>או</p>
      </div>
      <label className={styles.file}>בחר/י קובץ
        <input type='file' name='myfile' onChange={(e) => handleFile(e)} style={{ display: "none" }}></input>
      </label>

    </div>
  )
}

export default Common;