import React from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';

const Files = () => {
    const params = useParams()
    return (
        <div className={`center ${styles.Files}`}>
            files {params.id}page
        </div>
    );
}

export default Files;
