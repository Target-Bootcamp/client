import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context'
import styles from './style.module.css'

export default function Popup() {

    const context = useContext(DataContext)
    // const upPopup = useEffect()

    function exit() {
        context.setPopUp(null)
    }

    return (
        <>
            <div className={styles.backpopup} >

                <div className={styles.popup}>

                    <div className={styles.popheader}>
                        <button onClick={exit}>❌</button>
                    </div>
                    {context.popUp}
                </div>

            </div>
        </>
    )
}
