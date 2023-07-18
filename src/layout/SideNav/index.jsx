import { useContext, useState } from 'react';
import styles from './style.module.css' 
import SideNavButtons from '../../components/SideNavButtons';
import {DataContext} from '../../context/index'

const SideNav = ({style={}}) => {
    const context = useContext(DataContext);
    const activety = context.isActive;
    
    return (
        <div className={`center ${styles.sideNav} ${activety?styles.sideNavActive:styles.sideNavNoActive}`} style={style}>
           {activety?<SideNavButtons/>:<div>dashboard</div>}
        </div>
    );
}

export default SideNav;
