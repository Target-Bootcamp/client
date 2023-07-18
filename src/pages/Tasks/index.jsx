import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/index'
import PageHeader from '../../components/PageHeader'
import Table from '../../components/Table'
import Button from '../../components/Button'


const Tasks = () => {
    const context = useContext(DataContext);
    const setActivety = context.setIsActive;
    useEffect(() => {
        setActivety(true)
    }, [])
    const params = useParams()
    const allData = useContext(DataContext).actions.find(i => i.lecturer === params.id)

    console.log(allData.files);
    return (
        <div className={`center ${styles.tasks}`}>
            <div><PageHeader pageName={"משימות לביצוע"} actionType={allData.actionType} /> </div>
            <Table data={allData.files} />
            <div>{/* tasks {params.id} page */} </div>
            <div><Button className="w140" /* onClick={(onClick)}     type={type}*/ butoonName="שמור" /></div>

        </div>
    );
}

export default Tasks;


