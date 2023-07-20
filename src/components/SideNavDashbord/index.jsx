import React, { useContext } from 'react';
import styles from './style.module.css' 
import Accordion from '../Accordion';
import { DataContext } from '../../context';
import { Link } from 'react-router-dom';
const SideNavDashbord = () => {
    const context = useContext(DataContext)
    return (
        <>
            <Link to={"/action"} className={`center ${styles.newActivetyButton}`}><span>+</span>פעילות חדשה</Link>
            <div className={`${styles.taskToDo}`}>
                <h4>משימות לביצוע</h4>
                <div>
                    <Accordion items={context.actions}/>
                </div>
            </div>
        </>
    );
}

export default SideNavDashbord;
