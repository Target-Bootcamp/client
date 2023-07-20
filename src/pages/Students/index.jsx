import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { useParams } from 'react-router';
import { DataContext } from '../../context/index';
import Table from '../../components/Table';
import PageHeader from '../../components/PageHeader';
import FormAddEditStudent from '../../components/FormAddEditStudent';
import CurrentAction from '../../components/CurrentAction';
import apiCalls from '../../functions/apiCalls';
import InputText from '../../components/InputText';

// creator : yonatan ben david
const Students = () => {

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
        apiCalls.post("/", newStudent)
            .then(req => console.log(req))
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

    return (
        <div>
            <CurrentAction />
            <div>


                {data ? <div className={`${styles.students}`}>
                    <div className={`${styles.containerHeader}`}>
                        <PageHeader actionType={data.actionType} pageName={"תלמידים"} />
                    </div>
                    <div className='start'>
                        <InputText placeholder={"example"} /><br />
                        <InputText />
                    </div>

                    <div className='center'>
                        <Table deletion={"del"} data={data.users} add={obj => valueContext.setPopUp(<FormAddEditStudent newStudent={newStudent} UpdateStudent={UpdateStudent} />)} editing={obj => valueContext.setPopUp(<FormAddEditStudent userToUpdate={obj} UpdateStudent={UpdateStudent} newStudent={newStudent} />)} />
                    </div>

                </div>
                    :
                    <div className={styles.students}>
                        <h1>פעילות לא נמצאה</h1>
                    </div>}

            </div>
        </div>
    );
}





export default Students;
