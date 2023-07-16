import React from 'react';
import styles from './style.module.css' 
const  Content = ({style={},activity}) => {
  return (
    <div className={`center ${activity?styles.contentActive:styles.contentNoActive}`} style={style}>
      content
    </div>
  );
}

export default Content;
