import React from 'react';
import styles from './style.module.css'

const CardDashboard = ({badge}) => {
    return (
        <div className={styles.card}>
            <div>
                <div className={styles.badge}>
                    {badge}
                </div>
                <div className={styles.dotts}>
                    <div>do</div>
                </div>
            </div>
            <div className={styles.name}>
                <span>name</span>
            </div>
            <div>
                <div className={styles.ouer}>
                    ouers
                </div>
                <div className={styles.date}>
                    date
                </div>
            </div>
        </div>
    );
}

export default CardDashboard;
