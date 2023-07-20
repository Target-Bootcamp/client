import React, { useContext } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import { DataContext } from '../../context/index';
import Table from '../../components/Table';
import PageHeader from '../../components/PageHeader';
import FormAddEditStudent from '../../components/FormAddEditStudent';
import CurrentAction from '../../components/CurrentAction';

// creator : yonatan ben david
const Students = () => {

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
        // axios.post(url, newStudent)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
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
    const params = useParams();
    const param = parseInt(params.id);

    if (param >= 0 && param < valueContext.actions.length) {
        const activity = valueContext.actions[param];
        const activityType = activity.actionType;
        const students = valueContext.users.filter(user => activity.users.includes(user.userId));

        return (
            
            <>
      <CurrentAction /><div>
                <div className={`${styles.students}`}>
                    <PageHeader actionType={activityType} pageName={"תלמידים"} />
                    <Table deletion={"del"} data={students} add={obj => valueContext.setPopUp(<FormAddEditStudent newStudent={newStudent} UpdateStudent={UpdateStudent} />)} editing={obj => valueContext.setPopUp(<FormAddEditStudent userToUpdate={obj} UpdateStudent={UpdateStudent} newStudent={newStudent} />)} />
                </div>
            </div></>
        );
    }
    else {
        return (
            <div className={styles.students}>
                <h1>פעילות לא נמצאה</h1>
            </div>
        )
    }
}

export default Students;
