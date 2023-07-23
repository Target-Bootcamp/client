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
import { useParams } from "react-router-dom";

const Action = () => {
    const context = useContext(DataContext);
    const action = context.currentAction
    const [activety, setActivety] = useState(action)
    const typeArr = [{ value: "סדנא", text: "סדנא" }, { value: "קורס", text: "קורס" }, { value: "מכינה", text: "מכינה" }]
    const locationArr = [{ value: 1, text: "בגוף המזמין" }, { value: 2, text: "כיתה חיצונית" }]
    const daysArr = [{ text: 'יום א', value: 1 }, { text: 'יום ב', value: 2 }, { text: 'יום ג', value: 3 }, { text: 'יום ד', value: 4 }, { text: 'יום ה', value: 5 }, { text: 'יום ו', value: 6 }]
    const statusArr = [{ value: "טרם בוצעה", text: "טרם בוצעה" }, { value: "נשלחה", text: "נשלחה" }, { value: "נחתמה", text: "נחתמה" }]
    // console.log(action?action:"")
    return (
    <>
        <CurrentAction/>
        {/* {console.log(action?action:"")} */}
        <div className={`center scroller ${styles.newAction}`} >
            <div className={`center ${styles.header}`}>
                <h3>{"פעילות נוכית"}</h3>
                {/* {actionaction.input} */}
            </div>
            <div className={`${styles.main}`} >
                <div className={`${styles.mainRight}`}>
                    <div className={`${styles.actionLocation}`}>
                        <h4>סוג הפעילות</h4>
                        <div>
                        <SelectButtons current={action?[action.currentActionType]:[]}
                         isSingleChoice={true} classN={"w110"} options={typeArr}/>
                        </div>
                    </div>
                    <div className={`center ${styles.inputs}`}>
                        {/* <Search defaultVal={action?action.fundingSource:""} placeholder={"גוף מממן..."} action={"fundingSource"} /> */}
                        {/* <Search defaultVal={action?action.orderSource:""} placeholder={"גוף מזמין..."} action={"orderSource"} /> */}
                    </div>
                    <div className={`${styles.actionLocation}`}>
                        <h4>מיקום הפעילות</h4>
                        <div>
                            <SelectButtons current={action?[action.locationType]:[]} isSingleChoice={true} classN={"w166"} options={locationArr}/>

                        </div>
                    </div>
                    <div className={`${styles.days}`}>
                        <h4>ימי לימוד</h4>
                        <div>
                            <SelectButtons current={action?action.days:[]} isSingleChoice={false} classN={"w55"} options={daysArr}/>
                        </div>

                    </div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                <div className={`${styles.mainLeft}`}>
                    <div className={`center ${styles.inputs}`}>
                        <h4>שעות לימוד</h4>
                        {/* <InputHours defaultValueStart={action?action.ouerStart:""} defaultValueEnd={action?action.ouerEnd:""}/> */}
                    </div>
                    <div className={`${styles.inputs}`}>
                        <h4>תאריכים</h4>
                        {/* <InputDate /*startDate={action.dateStart} endDate={action.dateEnd}*/ /> */}
                    </div>
                    <div className={`${styles.actionLocation}`}>
                        <h4>סטטוס הזמנה</h4>
                        <div>
                            <SelectButtons current={action?[action.currentActionStatus]:[]} isSingleChoice={true} classN={"w110"} options={statusArr}/>

                        </div>
                    </div>
                    <div className={`center ${styles.sendBtu}`}>
                        <button className='w154'>{action?.bottunInner?action.bottunInner:"שמור"}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Action;
