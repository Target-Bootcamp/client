import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context";
import apiCalls from "../../functions/apiCalls";

const CurrentAction = () => {
  const param = useParams();
  const context = useContext(DataContext);
  // console.log(param.actionId);
  useEffect(() => {
    if (
      !context.currentAction ||
      context.currentAction?._id != param?.actionId
    ) {
      apiCalls
        .get("/actions/" + param.actionId)
        .then((res) =>{
          context.setCurrentAction(res)
          console.log(res);
        })
        // .catch((err) =>console.log(err))
      // coll()
      }
    }, []);
    const coll = async()=>{
      const a = await apiCalls.get("/actions/" + param.actionId)
      context.setCurrentAction(a)
      // console.log();
    }
    
    // console.log(context.currentAction);

  return <></>;
};

export default CurrentAction;
