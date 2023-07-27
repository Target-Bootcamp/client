import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './style.module.css'
import { DataContext } from '../../context';
import Table from '../../components/Table';
import PageHeader from '../../components/PageHeader';
import Common from '../../components/Common';
import EditFile from '../../components/EditFile/index.jsx';
import apiCalls from '../../functions/apiCalls'
import CurrentAction from "../../components/CurrentAction";

const Files = () => {
    const params = useParams()
    const data = useContext(DataContext)
    const [files, setFiles] = useState([])

    useEffect(() => {
        apiCalls.get(`/actions/${params.actionId}/files`)
            .then((res) => setFiles(res))
            .catch((error) => console.log(error))
    }
        , [])
    // console.log(params);
    const handleAddition = () => data.setPopUp(<Common files={files} setFiles={setFiles} />)
    const handleDeletion=(e)=>{
        setFiles(prev=>prev.filter(v=>v._id !== e._id))
    }
    
    // files.length && console.log(files);
    return (
        <>
            <CurrentAction />
            <div>
                <PageHeader pageName={"הוספת קבצים"} actionType={data.currentAction?.actionType} />
                <div className={styles.files}>
                    <Table data={files}
                        arr={["fileName", "name","createdDate","lastModifiedDate"]}
                        editing={(obj) => data.setPopUp(<EditFile obj={obj} setFiles={setFiles}/>)}
                        add={handleAddition} 
                        deletion={handleDeletion}/>
                </div>
            </div>
        </>
    );
}

export default Files;
