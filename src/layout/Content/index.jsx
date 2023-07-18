import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css' 
import { Route, Routes } from 'react-router-dom';
import Action from '../../pages/Action';
import NewAction from '../../pages/NewAction';
import Files from '../../pages/Files';
import Schedule from '../../pages/Schedule';
import Tasks from '../../pages/Tasks';
import Students from '../../pages/Students';
import {DataContext} from '../../context/index'
const  Content = ({style={}}) => {
  const context = useContext(DataContext);
  const activety = context.isActive
  const setActivety = context.setIsActive
  
  return (
    <div className={`center ${styles.content} ${activety?styles.contentActive:styles.contentNoActive}`} style={style}>
      <Routes>
        <Route path='/' element={<div>main page</div>} />
        <Route path='/action' element={<NewAction />} />
        <Route path='/action/:id' element={<Action />} />
        <Route path='/action/:id/files' element={<Files />} />
        <Route path='/action/:id/students' element={<Students />} />
        <Route path='/action/:id/schedule' element={<Schedule />} />
        <Route path='/action/:id/tasks' element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default Content;
