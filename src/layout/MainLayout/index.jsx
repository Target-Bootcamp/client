import React, { useState } from 'react';
import styles from './style.module.css' 
import SideNav from '../SideNav';
import Content from '../Content';

const MainLayout = ({active,navChilden,contentChilden }) => {    
    

    return (
        <div className={`center ${styles.hiro}`}>
            <SideNav  activity={active}>
                {navChilden}
            </SideNav>
            <Content activity={active}>
                {contentChilden}
            </Content>
        </div>
    );
}

export default MainLayout;
