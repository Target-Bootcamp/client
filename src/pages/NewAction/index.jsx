import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import {DataContext} from '../../context/index'
import Search from '../../components/Search';
import SelectButtons from '../../components/selectButtons';
const NewAction = ({}) => {
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
    const [activety,setActivety] = useState(action)
    const actArr = [{value:"סדנא",text:"סדנא"},{value:"קורס",text:"קורס"},{value:"מכינה",text:"מכינה"}]

    useEffect(()=>{
        context.setIsActive(true)
    },[])
    return (
        <div className={`center ${styles.newAction}`} > 
        <div className={`center ${styles.inputs}`}>
            <Search placeholder={"גוף מזמין..."} data={"fundingSource"} />
            <Search placeholder={"גוף מממן..."} data={"orderSource"} />
        </div>
        <div className={`center ${styles.actionButtons}`}>
            <SelectButtons options={actArr}/>
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