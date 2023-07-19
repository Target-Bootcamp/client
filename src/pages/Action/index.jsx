import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/index'
import Search from '../../components/Search';

const Action = () => {

    const context = useContext(DataContext);
    const params = useParams()


    return (
        <div className={` ${styles.action}`}>


            action


        </div>
    );
}

export default Action;



