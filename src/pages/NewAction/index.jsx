import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { DataContext } from '../../context/index'
import Search from '../../components/Search';
import SelectButtons from '../../components/selectButtons';
import InputText from '../../components/InputText';
import InputDate from '../../components/InputDate';
const NewAction = ({ }) => {
    const action = {
        _id: "",
        orderSource: "",
        fundingSource: "",
        location: "",
        locationType: 0,
        days: [],
        startTime: "",
        endTime: "",
        startDate: {},
        endDate: {},
        status: 0,
        lecturer: "",
        actionType: '',
        name: "",
        files: [
            {
                fileName: "",
                fileType: '',
                size: "",
                createdDate: null
            }
        ],
        tasks: [
            {
                deadline: {},
                details: "",
                isDone: false,
            }
        ],
        users: [],
        schedules: [
            {
                date: {},
                lecturer: "",
                comments: "",
                status: ""
            }
        ]
    }
    const context = useContext(DataContext);
    const [activety, setActivety] = useState(action)
    const statusArr = [{ value: "טרם בוצעה", text: "טרם בוצעה" }, { value: "נשלחה", text: "נשלחה" }, { value: "נחתמה", text: "נחתמה" }]
    const typeArr = [{ value: "סדנא", text: "סדנא" }, { value: "קורס", text: "קורס" }, { value: "מכינה", text: "מכינה" }]
    const locationArr = [{ value: "workshop", text: "בגוף המזמין" }, { value: "externally", text: "כיתה חיצונית" }]
    const daysArr = [{ text: 'יום א', value: 1 }, { text: 'יום ב', value: 2 }, { text: 'יום ג', value: 3 }, { text: 'יום ד', value: 4 }, { text: 'יום ה', value: 5 }, { text: 'יום ו', value: 6 }]


    useEffect(() => {
        context.setIsActive(false)
    }, [])

  return (
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
                        <   SelectButtons classN={"w94"} options={typeArr}/>

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
                        overs input
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
    );
}

export default NewAction;
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