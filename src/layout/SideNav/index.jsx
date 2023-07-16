import { useState } from 'react';
import styles from './style.module.css' 

const SideNav = ({children,style={}}) => {
  const [active, setActive] = useState(true);
    return (
        <div className={`center ${styles.sideNav} ${active?styles.sideNavActive:styles.sideNavNoActive}`} style={style}>
           {children} 
        </div>
    );
}

export default SideNav;
