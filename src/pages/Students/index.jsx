import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import {DataContext} from '../../context/index'
const Students = () => {
    const params = useParams()
    const context = useContext(DataContext);
    const activety = context.isActive;
    const setActivety = context.setIsActive;
    useEffect(()=>{
        setActivety(true)
    },[])

    return (
        <div className={`center ${styles.students}`}>
            students {params.id} page
        </div>
    );
}

export default Students;
