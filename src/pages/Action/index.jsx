import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import CurrentAction from "../../components/CurrentAction";
const Action = () => {
  return (
    <>
      <CurrentAction />
      <div className={` ${styles.action}`}>action</div>
    </>
  );
};

export default Action;
