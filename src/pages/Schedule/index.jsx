import React from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';

const Schedule = () => {
    const params = useParams()
    return (
        <div className={`center ${styles.schedule}`}>
            schedule {params.id} page
        </div>
    );
}

export default Schedule;
