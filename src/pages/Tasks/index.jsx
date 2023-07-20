import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import {DataContext} from '../../context/index'
import CurrentAction from '../../components/CurrentAction';

const Tasks = () => {
    const context = useContext(DataContext);
    const setActivety = context.setCurrentAction;

    const params = useParams()
    return (
        <>
      <CurrentAction />
        <div className={`center ${styles.tasks}`}>
            tasks {params.id} page
        </div></>
    );
}

export default Tasks;
