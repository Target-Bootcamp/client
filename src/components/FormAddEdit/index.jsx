import React from 'react'
import styles from "./style.module.css";
import InputText from "../InputText"
import Button from "../Button"
import { useParams } from 'react-router-dom';


export default function FormAddEdit(props) {

  function newStudent(student) {
    let name = student.target.name.value
    let lastName = student.target.lastName.value
    let phoneNumber = student.target.phoneNumber.value
    let email = student.target.email.value
  }

  function UpdateStudent(studentToUpdate) {
    console.log("student to update: ", studentToUpdate);
  }
  return (
    <div className={styles.containerFrom}>
      <form onSubmit={e => {
        e.preventDefault();
        if (!props) {
          return UpdateStudent(props)
        }
        else {
          newStudent(e)
        }
      }}>
        <InputText name={"name"} placeholder={"first name"} defaultValue={props.fName} />
        <InputText name={"lastName"} placeholder={"last name,"} />
        <InputText name={"phoneNumber"} type={"number"} placeholder={"phone number"} />
        <InputText name={"email"} placeholder={"email"} />
        <Button butoonName={"שלח"} type={"submit"} className="w110" />
      </form>
    </div>
  )
}
