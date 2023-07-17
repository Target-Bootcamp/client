import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context'
import styles from './style.module.css'

export default function Popup() {

    const context = useContext(DataContext)

    function exit() {
        context.setPopUp(null)
    }

    return (
        <>
            <div onClick={exit} className={styles.backpopup} >

                <div className={styles.popup}>

                    <div className={styles.popheader}>
                        <div onClick={exit}>❌</div>
                    </div>

                    {context.popUp}

                </div>

            </div>
        </>
    )
}
