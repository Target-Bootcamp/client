import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { Route, Routes, useParams } from 'react-router-dom';
// pages
import Action from '../../pages/Action';
import NewAction from '../../pages/NewAction';
import Files from '../../pages/Files';
import Schedule from '../../pages/Schedule';
import Tasks from '../../pages/Tasks';
import Students from '../../pages/Students';
import Dashboard from '../../pages/Dashboard'
import { DataContext } from '../../context/index'
import MainTest from '../../test'
const Content = ({ style = {} }) => {
  const param = useParams()
  const context = useContext(DataContext);
  const activety = context.currentAction;
  const setActivety = context.setCurrentAction;

  return (

    <div className={`${styles.content}  ${activety ? styles.contentActive : styles.contentNoActive}`} style={style}>
      <MainTest />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {/* <Route path='/' element={<NewAction />} /> */}
        <Route path='/action' element={<NewAction />} />
        <Route path='/action/:actionId' element={<Action />} />
        <Route path='/action/:actionId/files' element={<Files />} />
        <Route path='/action/:actionId/students' element={<Students />} />
        <Route path='/action/:actionId/schedule' element={<Schedule />} />
        <Route path='/action/:actionId/tasks' element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default Content;
