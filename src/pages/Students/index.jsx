import React from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';

const Students = () => {
    const params = useParams()

    return (
        <div className={`center ${styles.students}`}>
            students {params.id} page
        </div>
    );
}

export default Students;
