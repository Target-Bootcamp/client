import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import { DataContext } from '../../context';
import Table from '../../components/Table';
import PageHeader from '../../components/pageHeader';
import Common from '../../components/Common';
import EditFile from '../../components/EditFile.jsx';


const Files = () => {
    const params = useParams()
    const data = useContext(DataContext)
    const [files, setFiles] = useState([])
    const myActions = data.actions.find(v => v._id === params.id)
    useEffect(()=>{
        const myfile = myActions.files;
     setFiles(myfile)
    },[])

    return (
<div>
<PageHeader pageName={"הוספת קבצים"} actionType={myActions.actionType}/>
        <div className={styles.files}>
            <Table data={files} arr={["fileName","name"]} editing={(obj)=>data.setPopUp(<EditFile obj={obj}/>)}/>
{/* <Common stet={files} setStet={setFiles}/> */}
</div>
        </div>
    );
}

export default Files;
