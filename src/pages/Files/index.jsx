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
    const [myActions,setMyActions]=useState([])
    const [files, setFiles] = useState([])
useEffect(()=>{
apiCalls.get(`/actions/${params.id}`)
.then(res=>setMyActions(res))
// .then(()=>setFiles(.files))
.catch((error)=>console.log(error))
// const test=myActions.files
// setFiles(test)
},[])

useEffect(()=>{
    setFiles(myActions.files)}
,[myActions])

return (
    <div>
   { console.log(myActions)}
   { console.log( files)};
{/* <PageHeader pageName={"הוספת קבצים"} actionType={myActions.actionType}/> */}
        <div className={styles.files}>
            <Table data={myActions.files} arr={["fileName","name"]} editing={(obj)=>data.setPopUp(<EditFile obj={obj}/>)}/>
<Common stet={files} setStet={setFiles}/>
</div>
        </div>
    );
}

export default Files;
