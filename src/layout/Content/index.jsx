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
// testing----------------------------------------------------------------
import Aviad from '../../test/Aviad'
import Shay from '../../test/Shay'
import Tzvi from '../../test/Zvi'
import Moyshi from '../../test/Moyshi'
import Eli from '../../test/Eli'
import Yonatan from '../../test/Yonatan'
import Avraham from '../../test/Avraham'
import Sagi from '../../test/Sagi'
import Efraim from '../../test/Efraim'
import Asher from '../../test/Asher'
import Elad from '../../test/Elad'
import Amram from '../../test/Amram'
import Itamar from '../../test/Itamar'
import Inon from '../../test/Inon'

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
        {/* testing */}
        <Route path='/aviad' element={<Aviad />} />
         <Route path='/shay' element={<Shay />} />
         <Route path='/tzvi' element={<Tzvi />} />
         <Route path='/moyshi' element={<Moyshi />} />
         <Route path='/eli' element={<Eli />} />
         <Route path='/yonatan' element={<Yonatan />} />
         <Route path='/avraham' element={<Avraham />} />
         <Route path='/sagi' element={<Sagi />} />
         <Route path='/efraim' element={<Efraim />} />
         <Route path='/asher' element={<Asher />} />
         <Route path='/elad' element={<Elad />} />
         <Route path='/amram' element={<Amram />} />
         <Route path='/itamar' element={<Itamar />} />
         <Route path='/inon' element={<Inon />} />
      </Routes>
    </div>
  );
}

export default Content;
