import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context'
import Styles from './style.module.css'

export default function Popup() {
    const context = useContext(DataContext)
    const upPopup = useEffect()
    console.log(context);



    return (
        <>
            <div className={Styles.backpopup}>
                <div className={Styles.popap}>
                    <div className={Styles.popheader}>
                        <button>❌</button>
                    </div>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>save</button>

                </div>

            </div>
        </>
    )
}
