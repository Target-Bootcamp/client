import styles from './style.module.css'
import React from 'react'
// props : 
// creator:
function Badge({style = {}  , rule} ) {

  return (
    <div className={`center ${styles.name}`} style={style}>

        {rule} 
        
    </div>
  )
}

export default Badge