import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './style.module.css'
import { DataContext } from '../../context';
import Table from '../../components/Table';
import PageHeader from '../../components/pageHeader';
import Common from '../../components/Common';
import EditFile from '../../components/EditFile.jsx';
import apiCalls from '../../functions/apiCalls'

const Files = () => {
    const params = useParams()
    const data = useContext(DataContext)
    const [myActions, setMyActions] = useState([])
    const [files, setFiles] = useState([])
    useEffect(() => {
//  TODO:
//אם יש בקונטקסט קורס קיים, שליפת המידע של הכותרת ועוד דרך הקונטסט 
// אם אין לעדכן את הקונטקסט

        apiCalls.get(`/actions/${params.id}`)
            .then(res => {
                setMyActions(res)
            })
            .catch((error) => console.log(error))

    }, [])
    useEffect(() => {
        apiCalls.get(`/actions/${params.id}/files`)
        .then((res)=>setFiles(res))
    .catch((error) => console.log(error))
    }
        , [])
    // myActions.length && console.log(myActions);
    files.length && console.log(files);

    const handleAddition = () => data.setPopUp(<Common files={files} setFiles={setFiles} />)
    return (
        <div>
            <PageHeader pageName={"הוספת קבצים"} actionType={myActions.actionType} />
            <div className={styles.files}>
                <Table data={myActions.files}
                    arr={["fileName", "name"]}
                    editing={(obj) => data.setPopUp(<EditFile obj={obj} />)}
                    add={handleAddition} />
                {/* <Common stet={files} setStet={setFiles} /> */}
            </div>
        </div>
    );
}

export default Files;
