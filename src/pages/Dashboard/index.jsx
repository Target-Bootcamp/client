import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context';
import styles from "./style.module.css";

const Dashboard = () => {
    const context = useContext(DataContext);
    useEffect(()=>{
        context.setCurrentAction(false);        
    },[])
    return (
        <div className={`center ${styles.hiro}`}>
            <div className={styles.rightDiv}>
                dsf
            </div>
            <div className={styles.leftDiv}>
                <div className={`${styles}`}></div>
            </div>
        </div>
    );
}

export default Dashboard;
