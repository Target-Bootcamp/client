
import styles from './style.module.css'
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
import apiCalls from '../../functions/apiCalls'

// props : 
// creator: zvi miler
function Common({  files,  setFiles, style = {}, ...props }) {
  const contex = useContext(DataContext)
  const form = new FormData()
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation()
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation()
    const file = e.dataTransfer.files[0];
    form.append('file',file)
    apiCalls.post(`/actions/${contex.currentAction._id}`,form)
    .then((res)=> setFiles(prev => [...prev, res]))
    .catch((error) => console.log(error)) 
  }
  
  const handleFile = (e) => {
    e.preventDefault;
    const file = e.target.files[0];
    form.append('file',file)
    apiCalls.post(`/actions/${contex.currentAction._id}`,form)
    .then((res)=> setFiles(prev => [...prev, res]))
    .catch((error) => console.log(error))
   contex.setPopUp(null)
    // console.log(contex.currentAction);
  }

  useEffect(()=>{
apiCalls.post(`/acsions/${contex.currentAction._id}`,data)
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