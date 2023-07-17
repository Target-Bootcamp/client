import React, { useState } from 'react';
import styles from './style.module.css'
import SideNav from '../SideNav';
import Content from '../Content';

const MainLayout = () => {
    const [active, setActive] = useState(true);
    // false
    return (
        <div className={`center ${styles.hiro}`}>
            <SideNav active={active} />
            <Content active={active} />
        </div>
    );
}

export default MainLayout;
