import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/index'
import PageHeader from '../../components/pageHeader';
import Table from '../../components/Table';
import dayFunction from '../../functions/getDay';
import Button from '../../components/Button';


const Schedule = () => {
    const context = useContext(DataContext);
    const activety = context.isActive;
    const setActivety = context.setIsActive;
    useEffect(() => {
        setActivety(true)
    }, [])

    const params = useParams()
    const actionHeader = useContext(DataContext).actions.find(i => i._id == params.id)
    const arrList = actionHeader?.schedules || []
    const orderarr = ["date","Day", "lecturer", "status", "comments"]
    
    const datefromfakedb = useContext(DataContext).actions
    const currentdate = datefromfakedb[0].schedules[0].date
    const reversdate = dayFunction.convertDateFormat(currentdate)
    const deyfromdate = dayFunction.GetDayName(reversdate)
    const newKey = arrList.map(arr =>{return{...arr,Day : deyfromdate};});
    console.log(arrList);

    // creator: elad mizrchi
    return (
        <div>
            schedule {params.id} page
            < PageHeader pageName="לוח זמנים" actionType={actionHeader.actionType} />
            < Table data={newKey} arr={orderarr} />
            <Button className="w154" butoonName={"שמור"} />
            
        </div>
    );
}

export default Schedule;
