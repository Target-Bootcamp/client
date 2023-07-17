import React, { useContext, useState } from 'react';
import styles from './style.module.css'
import SideNav from '../SideNav';
import Content from '../Content';
import Template from '../../components/Template'
import { DataContext } from '../../context';
import Popup from '../Popup';



const MainLayout = () => {
    const context = useContext(DataContext)
    const [active, setActive] = useState(true);
    // false
    return (
        <div className={`center ${styles.hiro}`}>
            <SideNav active={active} />
            <Content active={active} />
            {context.popUp && <Popup />}
        </div>
    );
}

export default MainLayout;
