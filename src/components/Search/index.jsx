import React, { useState } from "react"
import { useContext } from 'react'
import { DataContext } from '../../context/index'
import styles from './style.module.css'




function Search({defaultVal, placeholder, data ,width}) {

    const [filterData, setFilterData] = useState([])
    const [input, setInput] = useState(defaultVal)
    const allData = useContext(DataContext).settings[data]

    const onChange = event => {
        event.target.value.length > 1 ? setFilterData(() =>
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
            <div style={{width}} className={styles.Search}>
                <input defaultValue={"dsfd"} type="text" value={input} placeholder={placeholder} onChange={onChange} />
            </div>
            {filterData.length > 0 &&
                <div className={styles.Btn}>
                    {filterData.map(value => <button key={value} onClick={() => onClick(value = { value })}>{value}</button>)}
                </div>
            }
        </div >)
}

export default Search


