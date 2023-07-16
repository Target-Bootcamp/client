import React from 'react';
import styles from './style.module.css' 
import SideNav from '../SideNav';
import Content from '../Content';

const MainLayout = () => {
    return (
        <div className={`center ${styles.hiro}`}>
            <SideNav activity={false}/>
            <Content activity={false}/>
        </div>
    );
}

export default MainLayout;
