
import { useParams } from 'react-router';
import styles from './style.module.css'
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
import apiCalls from '../../functions/apiCalls'

// props : 
// creator: zvi miler
function Common({  files,  setFiles, style = {}, ...props }) {
  const contex = useContext(DataContext)
  const params =useParams()
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation()
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation()
    const file = e.dataTransfer.files[0];
    setFiles(prev => [...prev, file])
    
  }
  
  const handleFile = (e) => {
    e.preventDefault;
    const file = e.target.files[0];
    setFiles(prev => [...prev, file])
  }

  useEffect(()=>{
apiCalls.post(`/acsions/${contex._id}`)
  },[files])
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