import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import {DataContext} from '../../context/index'

const Action = () => {
    const context = useContext(DataContext);
    const params = useParams()
    const activety = context.isActive
    const setActivety = context.setIsActive
    useEffect(()=>{
        setActivety(true)
    },[])
    return (
        <div className={`center ${styles.action}`}>
            action {params.id} page
        </div>
    );
}

export default Action;
