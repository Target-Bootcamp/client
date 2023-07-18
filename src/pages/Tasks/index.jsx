import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/index'

const Tasks = () => {
    const context = useContext(DataContext);
    const activety = context.isActive;
    const setActivety = context.setIsActive;
    useEffect(() => {
        setActivety(true)
    }, [])
    const params = useParams()
    const allData = useContext(DataContext).actions.find(i => i.lecturer == params.id)

    console.log(allData);
    return (
        <div className={`center ${styles.tasks}`}>
            {/* <Table props={allData.files} /> */}
            <PageHeader pageName={params.id} actionType={allData.actionType} />
            tasks {params.id} page
        </div>
    );
}

export default Tasks;
