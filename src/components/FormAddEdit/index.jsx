import React from 'react';
import styles from "./style.module.css";
import InputText from "../InputText";
import Button from "../Button";
import axios from 'axios';
import { DataContext } from '../../context';

// creator : yonatan ben david
// props : {object of student to update } or withOut props for creating new
export default function FormAddEdit(props) {

  function newStudent(student) {
    const newStudent = {
      _id: null,
      userId: null,
      fName: student.target.name.value,
      lName:  student.target.lastName.value,
      phone:student.target.phoneNumber.value,
      email:student.target.email.value,
      participantNum: null,
      comments: null,
      permission: null,
    };
    // axios.post(url, newStudent)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    console.log(newStudent);
  }

  function UpdateStudent(studentToUpdate) {
    const updateStudent= {
      _id: props.userToUpdate._id,
      userId: props.userToUpdate.userId,
      fName: studentToUpdate.target.name.value,
      lName:  studentToUpdate.target.lastName.value,
      phone:studentToUpdate.target.phoneNumber.value,
      email:studentToUpdate.target.email.value,
      participantNum:props.userToUpdate.participantNum,
      comments: props.userToUpdate.comments,
      permission: props.userToUpdate.permission,
    }

    

    console.log("student to update: ", updateStudent);
    return updateStudent
  }

  return (
    <div className={styles.containerFrom}>
      <form className={styles.form} onSubmit={e => {
        e.preventDefault();
        props.userToUpdate ?  UpdateStudent(e) : newStudent(e);
      }}>
        <InputText
          name={"name"}
          placeholder={!props.userToUpdate ? "Enter first name" : ""}
          defaultValue={props.userToUpdate ? props.userToUpdate.fName : ""}
        />
        <InputText
          name={"lastName"}
          placeholder={!props.userToUpdate ? "Enter last name" : ""}
          defaultValue={props.userToUpdate ? props.userToUpdate.lName : ""}
        />
        <InputText
          name={"phoneNumber"}
          type={"number"}
          placeholder={!props.userToUpdate ? "Enter phone number" : ""}
          defaultValue={props.userToUpdate ? props.userToUpdate.phone : ""}
        />
        <InputText
          name={"email"}
          placeholder={!props.userToUpdate ? "Enter email" : ""}
          defaultValue={props.userToUpdate ? props.userToUpdate.email : ""}
        />
        <Button butoonName={"שלח"} type={"submit"} className="w110" />
      </form>
    </div>
  );
}
