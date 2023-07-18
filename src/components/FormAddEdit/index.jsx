import React from 'react';
import styles from "./style.module.css";
import InputText from "../InputText";
import Button from "../Button";

// creator : yonatan ben david

export default function FormAddEdit(props) {
  function newStudent(student) {
    const newStudent = {
      name: student.target.name.value,
      lastName: student.target.lastName.value,
      phoneNumber: student.target.phoneNumber.value,
      email: student.target.email.value
    };
    console.log(newStudent);
  }

  function UpdateStudent(studentToUpdate) {
    console.log("student to update: ", studentToUpdate);
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
          defaultValue={props.userToUpdate ? props.userToUpdate.name : ""}
        />
        <InputText
          name={"lastName"}
          placeholder={!props.userToUpdate ? "Enter last name" : ""}
          defaultValue={props.userToUpdate ? props.userToUpdate.lastName : ""}
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
