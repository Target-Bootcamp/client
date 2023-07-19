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
            <div className={styles.backpopup} onClick={() => exit()} >

                <div className={styles.popup} onClick={e => e.stopPropagation()} >

                    <div className={styles.popheader}>
                        <div className={styles.x} onClick={(e) => exit(e)}>❌</div>
                    </div>

                    {context.popUp}

                </div>

            </div>
        </>
    )
}
