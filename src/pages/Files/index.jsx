import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import { DataContext } from '../../context';
import Table from '../../components/Table';
import PageHeader from '../../components/pageHeader';



const Files = () => {
    const params = useParams()
    const data = useContext(DataContext)
    const [files, setFiles] = useState([])
    const myActions = data.actions.find(v => v._id === params.id)
    // console.log("myActions:", myActions);
    const myfile = myActions.files;
    console.log("myfile:", myfile);
    useEffect(()=>{
    //  setFiles(myfile)
    console.log(files);
    },[])
    return (
        <div className={` ${styles.Files}`}>

<PageHeader pageName={"הוספת קבצים"} actionType={myActions.actionType}/>
            <Table data={myfile} arr={["fileName"]} />

        </div>
    );
}

export default Files;
