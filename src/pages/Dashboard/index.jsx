import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context';
import styles from "./style.module.css";
import Calendar from '../../components/Calendar';

const Dashboard = () => {
    const context = useContext(DataContext);
    useEffect(()=>{
        context.setCurrentAction(false);        
    },[])
    return (
        <div className={`center ${styles.hiro}`}>
            <div className={styles.rightDiv}>
                
            </div>
            <div className={styles.leftDiv}>
                <div className={`${styles.calendar}`}>
                    <Calendar/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
