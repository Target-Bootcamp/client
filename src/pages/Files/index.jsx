import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './style.module.css'
import { DataContext } from '../../context';
import Table from '../../components/Table';
import PageHeader from '../../components/pageHeader';
import Common from '../../components/Common';
import EditFile from '../../components/EditFile.jsx';
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
    files.length && console.log(files);
    const handleAddition = () => data.setPopUp(<Common files={files} setFiles={setFiles} />)
    return (
        <>
            <CurrentAction />
            <div>
                <PageHeader pageName={"הוספת קבצים"} actionType={data.currentAction?.actionType} />
                <div className={styles.files}>
                    <Table data={files}
                        arr={["fileName", "name","createdDate","lastModifiedDate"]}
                        editing={(obj) => data.setPopUp(<EditFile obj={obj} />)}
                        add={handleAddition} />
                </div>
            </div>
        </>
    );
}

export default Files;
