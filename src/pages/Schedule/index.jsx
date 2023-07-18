import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/index'
import PageHeader from '../../components/pageHeader';
import Table from '../../components/Table';

const Schedule = () => {
    const context = useContext(DataContext);
    const activety = context.isActive;
    const setActivety = context.setIsActive;
    useEffect(() => {
        setActivety(true)
    }, [])

    const params = useParams()
    const listdata = useContext(DataContext).actions.find(i => i.lecturer == params.id)


    // creator: elad mizrchi
    return (
        <div className={`center ${styles.schedule}`}>
            {/* schedule {params.id} page */}
            < PageHeader pageName="לוח זמנים" actionType={listdata.actionType} />
            < Table />
        </div>
    );
}

export default Schedule;
