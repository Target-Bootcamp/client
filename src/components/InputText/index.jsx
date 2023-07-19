import React from 'react'
import styles from './style.module.css'
import { useState } from 'react'

// props : name , placeholder , defaultValue , onchange , type
// creator: elad mizrchi

export default function InputText({ style = {}, type , name, placeholder,
    defaultValue, onChange, ...props }) {

        
    return (
            
        <input className={styles.name} style={style} {...props}
            type={type} defaultValue={defaultValue} placeholder={placeholder}
            name={name} onChange={onChange} />

    )
}
