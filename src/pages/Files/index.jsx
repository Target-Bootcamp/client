import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import {DataContext} from '../../context/index'

const Files = () => {
    const params = useParams()
    const context = useContext(DataContext);
    const activety = context.isActive;
    const setActivety = context.setIsActive;
    useEffect(()=>{
        setActivety(true)
    },[])
    return (
        <div className={`center ${styles.Files}`}>
            files {params.id}page
        </div>
    );
}

export default Files;
