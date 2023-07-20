import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context";
import apiCalls from "../../functions/apiCalls";

const CurrentAction = () => {
  const param = useParams();
  const context = useContext(DataContext);
  useEffect(() => {
    console.log("param", param);
    if (
      !context.currentAction ||
      context.currentAction?._id != param?.actionId
    ) {
      console.log(context.currentAction);
      apiCalls
        .get("/actions/" + param.actionId)
        .then((res) => context.setCurrentAction(res));
    }
  }, []);

  return <></>;
};

export default CurrentAction;
