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

export default Files;
