import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import {DataContext} from '../../context/index'
const NewAction = ({}) => {
    const context = useContext(DataContext);
    const activety = context.isActive;
    const setActivety = context.setIsActive;
    useEffect(()=>{
        setActivety(false)
    },[])
    return (
        <div className={`center ${styles.newAction}`} > 
            new action page
        </div>
    );
}

export default NewAction;
