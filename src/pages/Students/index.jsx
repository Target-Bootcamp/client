import React, { useContext } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import { DataContext } from '../../context/index';
import Table from '../../components/Table';
import PageHeader from '../../components/PageHeader';

// creator : yonatan ben david
const Students = () => {


    const valueContext = useContext(DataContext);
    const params = useParams();
    const param = parseInt(params.id);

    if (param >= 0 && param < valueContext.actions.length) {
        const activity = valueContext.actions[param];
        const activityType = activity.actionType;
        const students = valueContext.users.filter(user => activity.users.includes(user.userId));

        return (
            <div>
                <div className={`${styles.students}`}>
                    <PageHeader actionType={activityType} pageName={"תלמידים"} />
                    <Table data={students} />
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={styles.students}>
                <h1>פעילות לא נמצאה</h1>
            </div>
        )
    }
}

export default Students;
