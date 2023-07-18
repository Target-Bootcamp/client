import { useEffect, useState } from "react";
import styles from './style.module.css'

export default function SelectButtons({ options, isSingleChoice, className }) {
    const [choice, setChoice] = useState();
    useEffect(() => {
        console.log(choice);
    }, [choice])
    

    return (
        <div>
            {options.map(v => {
                return <button className={` ${choice === v.value ? styles.activee : ""}
                       ${styles.select}`} key={v.value} onClick={() =>
                        setChoice(v.value)}> {v.text} </button>
            })
            }
            {/* {options.map(val => val.map(v => {
                return <button className={`${choice === v.value ? styles.activee : ""}
                       ${styles.select} ${className}`} key={v.value} onClick={() =>
                        setChoice(v.value)}> {v.text} </button>
            }))
            } */}
        </div>
    )
}