import { useState, useContext } from "react";
import styles from './style.module.css'
import DataContext from "./../../context";

export default function VerifyDelete({ deleteName, deleteFunc }) {

    const context = useContext(DataContext)

    return (
        <>
            {context.setPopUp(
                <div>
                    <p> {deleteName} :האם אתה בטוח שאתה רוצה למחוק את  </p>
                    <button className={styles.boxes} onClick={() => deleteFunc()}
                    >אישור</button>

                    <button className={styles.boxes} onClick={() => context.setPopUp(false)}
                    >ביטול</button>
                </div>)}
        </>
    )
}