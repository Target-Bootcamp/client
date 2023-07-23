import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import CurrentAction from "../../components/CurrentAction";
import { DataContext } from "../../context";
import InputText from "../../components/InputText";
import SelectButtons from "../../components/selectButtons";
import Search from "../../components/Search";
import InputHours from "../../components/InputHours";
import InputDate from "../../components/InputDate";

const Action = () => {
    const context = useContext(DataContext);
    const action = context.currentAction
    const [data, setData] = useState();
    useEffect(()=>{
        setData(action)
    },[action])
    const typeArr = [{ value: "סדנא", text: "סדנא" }, { value: "course", text: "קורס" }, { value: "מכינה", text: "מכינה" }]
    const locationArr = [{ value: 1, text: "בגוף המזמין" }, { value: 2, text: "כיתה חיצונית" }]
    const daysArr = [{ text: 'יום א', value: 1 }, { text: 'יום ב', value: 2 }, { text: 'יום ג', value: 3 }, { text: 'יום ד', value: 4 }, { text: 'יום ה', value: 5 }, { text: 'יום ו', value: 6 }]
    const statusArr = [{ value: "1", text: "טרם בוצעה" }, { value: "2", text: "נשלחה" }, { value: "3", text: "נחתמה" }]
    
    const getHouer = (data)=>{
        const a = new Date(data).getHours().toString()
        return a
    }
    const getMinute = (data)=>{
        const a = new Date(data).getMinutes().toString().padStart(2,0)
        return a
    }
    const changeData = (key,val)=>{
        setData(prev=>{return {...prev,[key]:val}})
    }
    const handleChange = ()=>{

    }
    data&&console.log(data.actionType);

     return (
    <>
        <CurrentAction/>
        {data?<div className={`center scroller ${styles.newAction}`} >
            <div className={`center ${styles.header}`}>
                <h3>{"פעילות נוכית"}</h3>
                <InputText defaultValue={`${data.orderSource} - ${data.fundingSource}`}/>
                {/* <InputText defaultValue={data._id.toString()}/> */}
            </div>
            <div className={`${styles.main}`} >
                <div className={`${styles.mainRight}`}>
                    <div className={`${styles.actionLocation}`}>
                        <h4>סוג הפעילות</h4>
                        <div>
                        <SelectButtons  current={[data.actionType]}
                        isSingleChoice={true} classN={"w110"} options={typeArr}/> 

                        </div>
                    </div>
                    <div className={`center ${styles.inputs}`}>
                        <Search defaultVall={data.fundingSource} placeholder={"גוף מממן..."} data={"fundingSource"} />
                        <Search defaultVall={data.orderSource} placeholder={"גוף מזמין..."} data={"orderSource"} />
                    </div>
                    <div className={`${styles.actionLocation}`}>
                        <h4>מיקום הפעילות</h4>
                        <div>
                            <SelectButtons current={[data.locationType]} isSingleChoice={true} classN={"w166"} options={locationArr}/>

                        </div>
                    </div>
                    <div className={`${styles.days}`}>
                        <h4>ימי לימוד</h4>
                        <div>
                            <SelectButtons current={data.days} isSingleChoice={false} classN={"w55"} options={daysArr}/>
                        </div>

                    </div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                <div className={`${styles.mainLeft}`}>
                    <div className={`center ${styles.inputs}`}>
                        <h4>שעות לימוד</h4>
                        
                        <InputHours defaultValueStart={
                            `${getHouer(data.startTime)}:${getMinute(data.startTime)}`
                        }
                         defaultValueEnd={
                            `${getHouer(data.endTime)}:${getMinute(data.endTime)}`
                            }/>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <h4>תאריכים</h4>
                        <InputDate startDate={data.dateStart} endDate={data?data.dateEnd:""} />
                    </div>
                    <div className={`${styles.actionLocation}`}>
                        <h4>סטטוס הזמנה</h4>
                        <div>
                            <SelectButtons current={[data.status]} isSingleChoice={true} classN={"w110"} options={statusArr}/>

                        </div>
                    </div>
                    <div className={`center ${styles.sendBtu}`}>
                        <button onClick={handleChange} className='w154'>{data?.bottunInner?data.bottunInner:"שמור"}</button>
                    </div>
                </div>
            </div>
        </div>:""}
    </>
  );
};

export default Action;
