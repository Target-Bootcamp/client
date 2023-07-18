import React, { useState } from "react"
import { useContext } from 'react'
import { DataContext } from '../../context/index'
import styles from './style.module.css'




function Search({ placeholder, data }) {
    const [filterData, setFilterData] = useState([])
    const [input, setInput] = useState("")
    const allData = useContext(DataContext).settings[data]
    const onChange = event => {
        event.target.value.length > 2 ? setFilterData(() =>
            allData.filter(i => i.includes(event.target.value))
        ) : setFilterData([])
        setInput(event.target.value)
    }
    const onClick = value => {
        setInput(value.value)
        setFilterData([])
    }
    return (
        <div className={styles.container}>
            <div className={styles.Search}>
                <input type="text" value={input} placeholder={placeholder} onChange={onChange} />
            </div>
            {filterData.length > 0 &&
                <div className={styles.Btn}>
                    {filterData.map(value => <button key={value} onClick={() => onClick(value = { value })}>{value}</button>)}
                </div>
            }
        </div >)
}

export default Search


