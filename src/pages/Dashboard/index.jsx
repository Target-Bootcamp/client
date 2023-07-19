import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Cards from '../../components/Cards';
import { DataContext } from '../../context';
import Shay from '../../test/Shay';
import styles from './style.module.css'
import apiCalls from '../../functions/apiCalls';
const Dashboard = () => {
    const data = useContext(DataContext)
    const [date, setDate] = useState(new Date())
    const [filterArr, setFilterArr] = useState([])
    const [len, setLen] = useState(3)
    // let len = 3
    useEffect(() => {
apiCalls.get('/actions')
.then((res)=>setFilterArr(res.data))
.chech((res)=>console.log(res))
        setFilterArr()

    }, [])
    // for (let i = 0; i < len; i++) {
    //     // setFilterArr([])
    //     filterArr.push(data.actions[i])
    // }
 return (<>
        <div className={styles.main}>

            <div className={styles.right}>
                <h3 className='h1'>פעילויות נוכחיות</h3>
                <Cards action={filterArr} />
                 <button className='w244' onClick={() => setLen(len + 3)}>פעילויות נוספות </button>
            </div>

            <div className={styles.left}>
                <div><Shay /></div>
                <Cards action={data.actions} />
            </div>
        </div>

    </>);
}

export default Dashboard;
