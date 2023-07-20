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
    function onclikDate(dateOne) {
        console.log(dateOne);
        apiCalls.get('/actions').then((res) => setDate(res))
            .catch((err) => console.log(err))
    }
    function onclikMonth(monthOne) {
        console.log(monthOne);
        apiCalls.get('/actions').then((res) => setMonth(res))
            .catch((err) => console.log(err))

    }
    const data = useContext(DataContext)
    const [date, setDate] = useState([])
    const [month, setMonth] = useState([])
    const [filterArr, setFilterArr] = useState([])
    const [len, setLen] = useState(3)
    // let len = 3
    useEffect(() => {
        apiCalls.get(`/actions/`, len)
            .then((res) => setFilterArr(res))
            .catch((res) => console.log(res))
                
    }, [])
    console.log(filterArr.forEach((i) => console.log(i.schedules )))

    // for (let i = 0; i < len; i++) {
    //     // setFilterArr([])npm start

    //     filterArr.push(data.actions[i])
    // }
    return (<>
        <div className={styles.main}>

            <div className={styles.right}>
                <h3 className='h1'>פעילויות נוכחיות</h3>
                <Cards action={filterArr} />
                <button className='w244' onClick={() => {
                    apiCalls.get(`/actions/`, len).then((res) => setFilterArr(res))
                        .catch((err) => console.log(err))
                }}>פעילויות נוספות </button>
            </div>
            
            <div className={styles.left}>
                <div><Shay onclikDate={onclikDate} onclikMonth={onclikMonth} month={month} /></div>
                <Cards action={date} />
            </div>
        </div>

    </>);
}

export default Dashboard;
