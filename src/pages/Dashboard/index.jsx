import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context';

const Dashboard = () => {
    const context = useContext(DataContext);
    useEffect(()=>{
        context.setCurrentAction(false);        
    },[])
    return (
        <div>
            main page
        </div>
    );
}

export default Dashboard;
