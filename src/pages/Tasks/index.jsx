import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader'
import Table from '../../components/Table'
import apiCalls from '../../functions/apiCalls'
import { DataContext } from '../../context/index'
import FromToTasks from '../../components/FromToTasks';


const Tasks = () => {
    const [data, setData] = useState()
    const context = useContext(DataContext);
    const params = useParams()

    const setActivety = context.setIsActive;
    useEffect(() => {
        setActivety(true)
    }, [])

    useEffect(() => {
        apiCalls.get(`/actions/${params.id}`)
            .then(res => setData(res))
            .catch(errow => console.log(errow))
    }, [])

    const arr = ["isDone", "details", "deadline", "editing"]

    function Update(data) {
        context.setPopUp(<FromToTasks data={data} />)
    }

    return (
        // <div><PageHeader pageName={"משימות לביצוע"} /*actionType={data.actionType}*/ /> </div>
        <div className={`center ${styles.tasks}`}>
            {data ? <>
                <Table data={data.tasks} arr={arr} editing={Update} deletion={"<Popup />"} TaskMarking={"<Popup />"} /> </> : null}
        </div>
    );
}


export default Tasks;






// <div>{/* tasks {params.id} page */} </div>
