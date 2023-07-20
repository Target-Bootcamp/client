<<<<<<< HEAD
import React, { useContext, useEffect } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/index'

const Files = () => {
    const params = useParams()
    const context = useContext(DataContext);
    const activety = context.isActive;
    const setActivety = context.setIsActive;
    useEffect(() => {
        setActivety(true)
    }, [])
    return (
        <div className={`center ${styles.Files}`}>
            files {params.id}page
        </div>
    );
}
=======
import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/index";
import CurrentAction from "../../components/CurrentAction";

const Files = () => {
  const params = useParams();
  const context = useContext(DataContext);
  const setActivety = context.setCurrentAction;

  // useEffect(()=>{
  //     setActivety(true)
  // },[])
  return (
    <>
      <CurrentAction />
      <div className={`center ${styles.Files}`}>
        files {params.actionId}page
      </div>
    </>
  );
};
>>>>>>> 268a1627846855db8a39bd3f713affe6e15c8661

export default Files;
