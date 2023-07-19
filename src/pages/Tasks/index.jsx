import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/index'
import PageHeader from '../../components/PageHeader'
import Table from '../../components/Table'
import Popup from '../../layout/Popup';
import apiCalls from '../../functions/apiCalls'

const Tasks = () => {
    const context = useContext(DataContext);
    const setActivety = context.setIsActive;
    useEffect(() => {
        setActivety(true)
    }, [])

    useEffect(() => {
        apiCalls.get('/actions')
            .then(res => setCount(res))
            .catch(errow => console.log(errow))

    }, [])




    const params = useParams()
    const allData = useContext(DataContext).actions.find(i => i._id === params.id)
    const arr = ["isDone", "details", "deadline", "editing"]
    console.log(allData, "yyyuu");

    console.log(allData.tasks);
    return (
        <div className={`center ${styles.tasks}`}>
            <div><PageHeader pageName={"משימות לביצוע"} actionType={allData.actionType} /> </div>
            <Table data={allData.tasks} arr={arr} /*editing={<Popup />}*/ deletion={<Popup />} TaskMarking={<Popup />} />
            <div>{/* tasks {params.id} page */} </div>

        </div>
    );
}

export default Tasks;


