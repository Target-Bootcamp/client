import { useEffect, useState } from "react";
import styles from './style.module.css'

// this compenent has a functuality to choose the place of the studies (external or clients) only one of them,
//the sort of the studies (course, whorshop or prep) only one of them,
// the days of studies which this choise is multiple
// second click of each button will remove the choise

export default function SelectButtons({ current,options, isSingleChoice, classN }) {
    useEffect(()=>{
        setSelected( current? current:[])
    },[])
    const [selected, setSelected] = useState([]);
    const handleClick = (v) => {
        setSelected(
            selected.includes(v) ?
                selected.filter(s => s != v):(isSingleChoice ? [v] : [...selected, v]))
    }

    // useEffect(() => {
    //     console.log(selected);
    // }, [selected])

    return (
        <div>
            {options.map(v => {
                return <button className={`${selected.includes(v.value) ? styles.activee : "" } ${styles.select} ${classN}`} key={v.value}
                    onClick={() => handleClick(v.value)} > {v.text} </button>
            })
            }
        </div>
    )


   
}