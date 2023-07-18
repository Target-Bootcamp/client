import React from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router'
import { useState } from "react"
import { useContext } from 'react'
import { DataContext } from '../../context/index'
// import Table from '../../components/Table';
import PageHeader from '../../components/pageHeader';

const Tasks = () => {
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
