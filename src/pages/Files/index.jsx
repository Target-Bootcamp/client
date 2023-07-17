import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import { DataContext } from '../../context';
import Table from '../../components/Table';



const Files = () => {
    const params = useParams()
    const data = useContext(DataContext)
    const [files,setFiles]=useState([])
    const myActions =data.actions.find(v=>v._id===params.id)
    console.log(myActions);
    useEffect(()=>{
     const myfile=myActions.files;
     setFiles(myfile)
     console.log("files:",files);
    },[])
    return (
        <div className={`center ${styles.Files}`}>
            files {params.id}page
            {myActions._id}
            <Table  files={files}/>
            {/* <Commont stet={files} usestet={setFiles}/> */}
        </div>
    );
}

export default Files;
