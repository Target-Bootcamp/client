import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import {DataContext} from '../../context/index'

const Tasks = () => {
    const context = useContext(DataContext);
    const setActivety = context.setIsActive;
    useEffect(()=>{
        setActivety(true)
    },[])
    const params = useParams()
    return (
        <div className={`center ${styles.tasks}`}>
            tasks {params.id} page
        </div>
    );
}

export default Tasks;
