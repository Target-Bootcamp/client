import { useState } from 'react';
import styles from './style.module.css' 

const SideNav = ({active,children,style={}}) => {
    return (
        <div className={`center ${styles.sideNav} ${active?styles.sideNavActive:styles.sideNavNoActive}`} style={style}>
           {!active?"buttons":"dashboard"} 
        </div>
    );
}

export default SideNav;
