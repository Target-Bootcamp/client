import React from 'react';
import styles from './style.module.css' 
const  Content = ({children,style={},activity}) => {
  return (
    <div className={`center ${styles.content} ${activity?styles.contentActive:styles.contentNoActive}`} style={style}>
      {children}
    </div>
  );
}

export default Content;
