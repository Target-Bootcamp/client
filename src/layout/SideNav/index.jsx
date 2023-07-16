import React from 'react';
import styles from './style.module.css' 

const SideNav = ({style={},activity}) => {
    return (
        <div className={`center ${activity?styles.sideNavActive:styles.sideNavNoActive}`} style={style}>
           side nav 
        </div>
    );
}

export default SideNav;
