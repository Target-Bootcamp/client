import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import {DataContext} from '../../context/index'

const Action = () => {
   
    const context = useContext(DataContext);
    console.log(context);
    
    useEffect(()=>{
        context.setIsActive(true)
    },[])
    return (
        <div className={`center ${styles.action}`}>





        </div>
    );
}

export default Action;



