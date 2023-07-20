import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader'
import Table from '../../components/Table'
import Popup from '../../layout/Popup';
import apiCalls from '../../functions/apiCalls'

const Tasks = () => {
    const [context, setContext] = useState()
    const setActivety = context.setIsActive;
    useEffect(() => {
        setActivety(true)
    }, [])

    useEffect(() => {
        apiCalls.get('/actions')
            .then(res => setContext(res))
            .catch(errow => console.log(errow))

    }, [])




    const params = useParams()
    const allData = context.find(i => i._id === params.id).tasks
    const arr = ["isDone", "details", "deadline", "editing"]
    console.log(allData);

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


