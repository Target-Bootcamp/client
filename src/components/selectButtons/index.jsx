import { useEffect, useState } from "react";
import styles from './style.module.css'

export default function SelectButtons({ options, isSingleChoice,width }) {
    const [choice, setChoice] = useState();
    useEffect(() => {
        // console.log(choice);
    }, [choice])
    return (
        <>
            {options.map(v => {
                return <button style={{width}} className={` ${choice === v.value ? styles.activee : ""}
                       ${styles.select}`} key={v.value} onClick={() =>
                        setChoice(v.value)}> {v.text} </button>
            })
            }
        </>
    )
}