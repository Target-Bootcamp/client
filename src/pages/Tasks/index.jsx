import React from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';

const Tasks = () => {
    const params = useParams()
    return (
        <div className={`center ${styles.tasks}`}>
            tasks {params.id} page
        </div>
    );
}

export default Tasks;
