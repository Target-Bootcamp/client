import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import CurrentAction from "../../components/CurrentAction";
import { DataContext } from "../../context";
import InputText from "../../components/InputText";
import SelectButtons from "../../components/selectButtons";
import Search from "../../components/Search";
import InputHours from "../../components/InputHours";
import InputDate from "../../components/InputDate";
import apiCalls from "../../functions/apiCalls";
const Action = () => {
  const context = useContext(DataContext);
  const [action, setAction] = useState({});
  useEffect(()=>{
    apiCalls.get(`/actions/${context.CurrentAction}`)
    .then(v =>setAction(v))
    .catch(err=>console.log(err))
  },[])
  console.log(action.status?action:"");
  // const [activety, setActivety] = useState(action);
  const statusArr = [{ value: "טרם בוצעה", text: "טרם בוצעה" }, { value: "נשלחה", text: "נשלחה" }, { value: "נחתמה", text: "נחתמה" }]
  const typeArr = [{ value: "סדנא", text: "סדנא" }, { value: "קורס", text: "קורס" }, { value: "מכינה", text: "מכינה" }]
  const locationArr = [{ value: "workshop", text: "בגוף המזמין" }, { value: "externally", text: "כיתה חיצונית" }]
  const daysArr = [{ text: 'יום א', value: 1 }, { text: 'יום ב', value: 2 }, { text: 'יום ג', value: 3 }, { text: 'יום ד', value: 4 }, { text: 'יום ה', value: 5 }, { text: 'יום ו', value: 6 }]
  return (
    <>
      <div className={`center scroller ${styles.newAction}`} >
            <div className={`center ${styles.header}`}>
                <h3>פעילות חדשה</h3>
                <InputText />
            </div>
            <div className={`${styles.main}`} >
                <div className={`${styles.mainRight}`}>
                    <div className={`${styles.actionType}`}>
                        <h4>סוג הפעילות</h4>
                        <div>
                        <   SelectButtons  classN={"w94"} options={typeArr}/>

                        </div>
                    </div>
                    <div className={`center ${styles.inputs}`}>
                        <Search placeholder={"גוף מזמין..."} data={"fundingSource"} />
                        <Search placeholder={"גוף מממן..."} data={"orderSource"} />
                    </div>
                    <div className={`${styles.actionLocation}`}>
                        <h4>מיקום הפעילות</h4>
                        <div>
                            <SelectButtons classN={"w166"} options={locationArr}/>

                        </div>
                    </div>
                    <div className={`${styles.days}`}>
                        <h4>ימי לימוד</h4>
                        <div>
                            <SelectButtons classN={"w55"} options={daysArr}/>
                        </div>

                    </div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                <div className={`${styles.mainLeft}`}>
                    <div className={`center ${styles.inputs}`}>
                        <h4>שעות לימוד</h4>
                        <InputHours/>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <h4>תאריכים</h4>
                        <InputDate />
                    </div>
                    <div className={`${styles.actionLocation}`}>
                        <h4>סטטוס הזמנה</h4>
                        <div>
                            <SelectButtons classN={"w110"} options={statusArr}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Action;
