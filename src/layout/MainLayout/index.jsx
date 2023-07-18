import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import SideNav from '../SideNav';
import Content from '../Content';
import { DataContext } from '../../context/index'
import Popup from '../Popup';

const MainLayout = () => {
    const context = useContext(DataContext);
    const setActivety = context.setIsActive;

    useEffect(() => {
        window.location.pathname === "/" ? setActivety(false) : "";
    }, [])
    return (
        <div className={`center ${styles.hiro}`}>
            <SideNav />
            <Content />
            {/* {context.popUp && <Popup />} */}
        </div>
    );
}

export default MainLayout;
