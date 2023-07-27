import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { DataContext } from '../../context/index'
import Search from '../../components/Search';
import SelectButtons from '../../components/selectButtons';
import InputText from '../../components/InputText';
import InputDate from '../../components/InputDate';
import InputHours from '../../components/InputHours';
import apiCalls from '../../functions/apiCalls';

const Test = () => {

    const typeArr = [{ value: "סדנא", text: "סדנא" }, { value: "קורס", text: "קורס" }, { value: "מכינה", text: "מכינה" }]
    const locationArr = [{ value: "workshop", text: "בגוף המזמין" }, { value: "externally", text: "כיתה חיצונית" }]
    const daysArr = [{ text: 'יום א', value: 1 }, { text: 'יום ב', value: 2 }, { text: 'יום ג', value: 3 }, { text: 'יום ד', value: 4 }, { text: 'יום ה', value: 5 }, { text: 'יום ו', value: 6 }]
    const statusArr = [{ value: "טרם בוצעה", text: "טרם בוצעה" }, { value: "נשלחה", text: "נשלחה" }, { value: "נחתמה", text: "נחתמה" }]
    
    const defualtData = {
        hedline:"פעילות נוחכית",
        currentActionType:"קורס",
        defaultFundingVal:"",
        defaultOrderVal:"",
        currentActionLocation:"workshop",
        currentActionDayes: [1,3,4],
        ouerStart:"01:00",
        ouerEnd:"08:00",
        dateStart:"22/03/22",
        dateEnd:"25/03/22",
        currentActionStatus:"טרם בוצעה",
        bottunInner:"שלח"
     }
    
    const context = useContext(DataContext);
    const action = context.currentAction
    const [activety, setActivety] = useState(action)
    const [data2, setData2] = useState()
    const [data, setData] = useState(defualtData)
    
    useEffect(() => {
        context.setCurrentAction(false)
        // apiCalls.get("/actiond/64b7a5230366c31bd049cbf0")
    }, [])

  return (
        <div className={`center scroller ${styles.newAction}`} >
            <div className={`center ${styles.header}`}>
                <h3>{data.hedline}</h3>
                {data.input}
            </div>
            <div className={`${styles.main}`} >
                <div className={`${styles.mainRight}`}>
                    <div className={`${styles.actionLocation}`}>
                        <h4>סוג הפעילות</h4>
                        <div>
                        <SelectButtons current={[data.currentActionType]}
                         isSingleChoice={true} classN={"w110"} options={typeArr}/>
                        </div>
                    </div>
                    <div className={`center ${styles.inputs}`}>
                        <Search defaultVal={data.defaultFundingVal} placeholder={"גוף מממן..."} data={"fundingSource"} />
                        <Search defaultVal={data.defaultOrderVal} placeholder={"גוף מזמין..."} data={"orderSource"} />
                    </div>
                    <div className={`${styles.actionLocation}`}>
                        <h4>מיקום הפעילות</h4>
                        <div>
                            <SelectButtons current={[data.currentActionLocation]} isSingleChoice={true} classN={"w166"} options={locationArr}/>

                        </div>
                    </div>
                    <div className={`${styles.days}`}>
                        <h4>ימי לימוד</h4>
                        <div>
                            <SelectButtons current={data.currentActionDayes} isSingleChoice={false} classN={"w55"} options={daysArr}/>
                        </div>

                    </div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                <div className={`${styles.mainLeft}`}>
                    <div className={`center ${styles.inputs}`}>
                        <h4>שעות לימוד</h4>
                        <InputHours defaultValueStart={data.ouerStart} defaultValueEnd={data.ouerEnd}/>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <h4>תאריכים</h4>
                        <InputDate /*startDate={data.dateStart} endDate={data.dateEnd}*/ />
                    </div>
                    <div className={`${styles.actionLocation}`}>
                        <h4>סטטוס הזמנה</h4>
                        <div>
                            <SelectButtons current={[data.currentActionStatus]} isSingleChoice={true} classN={"w110"} options={statusArr}/>

                        </div>
                    </div>
                    <div className={`center ${styles.sendBtu}`}>
                        <button className='w154'>{data.bottunInner?data.bottunInner:"שמור"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
// {
    //     _id: "null",
    //     orderSource: "עריית בני ברק",
    //     fundingSource: "משרד הכלכלה",
    //     location: "בני ברק",
    //     locationType: 1,
    //     days: [1, 5],
    //     startTime: "16:30",
//     endTime: "21:30",
//     startDate: new Date("01/01/2023"),
//     endDate: new Date("01/08/2023"),
//     status: 1,
//     lecturer: "yosef",
//     actionType: 'workshop',
//     name: 'full stack',
//     files: [
//        {
//           fileName: "syllabus-fs",
//           fileType: 'txt',
//           size: "2433",
//           createdDate: new Date("12/04/2022")
//        },
//        {
//           fileName: "images01",
//           fileType: 'jpg',
//           size: "202131",
//           createdDate: new Date("11/06/2023")
//        }
//     ],
//     tasks: [
//        {
//           deadline: new Date("22/07/2023"),
//           details: "task 1",
//           isDone: false,
//        },
//        {
//           deadline: new Date("23/07/2023"),
//           details: "task 2",
//           isDone: true,
//        },
//        {
//           deadline: new Date("27/07/2023"),
//           details: "task 3",
//           isDone: false,
//        },
//     ],
//     users: ["123", "456", "789"],
//     schedules: [
//        {
//           date: "16/07/2023",
//           lecturer: "Aviad",
//           comments: "to do users name",
//           status: "active"
//        },
//        {
//           date: "20/08/2023",
//           lecturer: "Aviad",
//           comments: "to do users  last name",
//           status: "active"
//        }
//     ]
//  }