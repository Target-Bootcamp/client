import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import { DataContext } from '../../context/index';
import Table from '../../components/Table';
import PageHeader from '../../components/PageHeader';
import FormAddEditStudent from '../../components/FormAddEditStudent';
import CurrentAction from '../../components/CurrentAction';
import apiCalls from '../../functions/apiCalls';

// creator : yonatan ben david
const Students = () => {
    const action = CurrentAction;
    const [arryStundent, setArryStundent] = useState([])
    const [data, setData] = useState()


    const params = useParams();
    const param = params.actionId;
    
    useEffect(() => {
        apiCalls.get(`/actions/${param}`)
            .then(res => {
                setData(res);
                console.log("res", res);
            })

    }, [])

    function newStudent(student) {


        const newStudent = {
            _id: null,
            userId: null,
            fName: student.target.name.value,
            lName: student.target.lastName.value,
            phone: student.target.phoneNumber.value,
            email: student.target.email.value,
            participantNum: null,
            comments: null,
            permission: null,
        };
        apiCalls.post("/", { newStudent })
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message));

        console.log(newStudent);
    }

    function UpdateStudent(studentToUpdate, _id) {
        const updateStudent = {
            _id,
            fName: studentToUpdate.target.name.value,
            lName: studentToUpdate.target.lastName.value,
            phone: studentToUpdate.target.phoneNumber.value,
            email: studentToUpdate.target.email.value,

        }
        console.log("student to update: ", updateStudent);
        return updateStudent
    }

    const valueContext = useContext(DataContext);
    // data && console.log(data[0]._id);

    // const activityId = data.users.map(activity => activity);
    // if (activityId) {
    //     activityId.map(student => {
    //         apiCalls.get(`/users/${student}`)
    //             .then(response => console.log(response))
    //             .catch(error => console.log(error))
    //     })
    // // }
    // arryStundent && console.log("arry", arryStundent);
    return (
        <div>
            {!data ? <div className={`${styles.students}`}>
                <div>work with data</div>
                {/* <PageHeader actionType={data.activityType} pageName={"תלמידים"} /> */}
                {/* <Table deletion={"del"} data={arryStundent} add={obj => valueContext.setPopUp(<FormAddEditStudent newStudent={newStudent} UpdateStudent={UpdateStudent} />)} editing={obj => valueContext.setPopUp(<FormAddEditStudent userToUpdate={obj} UpdateStudent={UpdateStudent} newStudent={newStudent} />)} /> */}
            </div>
                :
                <div className={styles.students}>
                    <h1>פעילות לא נמצאה</h1>
                </div>}

        </div>
    );
}




//         // apiCalls.get(`/users/${activityId}`)
//     }
// }

//     if (param >= 0 && param < valueContext.actions.length) {
//         const activity = valueContext.actions[param];
//         const activityType = activity.actionType;
//         // console.log(activityType);
//         const students = valueContext.users.filter(user => activity.users.includes(user.userId));

//         return (

//             <>
//       <CurrentAction /><div>
//                 <div className={`${styles.students}`}>
//                     <PageHeader actionType={activityType} pageName={"תלמידים"} />
//                     <Table deletion={"del"} data={students} add={obj => valueContext.setPopUp(<FormAddEditStudent newStudent={newStudent} UpdateStudent={UpdateStudent} />)} editing={obj => valueContext.setPopUp(<FormAddEditStudent userToUpdate={obj} UpdateStudent={UpdateStudent} newStudent={newStudent} />)} />
//                 </div>
//             </div></>
//         );
//     }
//     else {
//         return (
//             <div className={styles.students}>
//                 <h1>פעילות לא נמצאה</h1>
//             </div>
//         )
//     }
// }

export default Students;
