import React from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
const Action = () => {
    const params = useParams()
    return (
        <div className={`center ${styles.action}`}>
            action {params.id} page
        </div>
    );
}

export default Action;
