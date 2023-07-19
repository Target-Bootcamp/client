import React from 'react';
import styles from "./style.module.css";
import InputText from "../InputText";
import Button from "../Button";


// creator : yonatan ben david
// props : {object of student to update } or withOut props for creating new
export default function FormAddEditStudent({ userToUpdate ,UpdateStudent,    newStudent}) {

  return (
    <div className={styles.containerFrom}>
      <form className={styles.form} onSubmit={e => {
        e.preventDefault();
        userToUpdate?  UpdateStudent(e , userToUpdate._id) : newStudent(e);
      }}>
        <InputText
          name={"name"}
          placeholder={!userToUpdate ? "Enter first name" : ""}
          defaultValue={userToUpdate ? userToUpdate.fName : ""}
        />
        <InputText
          name={"lastName"}
          placeholder={!userToUpdate ? "Enter last name" : ""}
          defaultValue={userToUpdate ? userToUpdate.lName : ""}
        />
        <InputText
          name={"phoneNumber"}
          type={"number"}
          placeholder={!userToUpdate ? "Enter phone number" : ""}
          defaultValue={userToUpdate ? userToUpdate.phone : ""}
        />
        <InputText
          name={"email"}
          placeholder={!userToUpdate ? "Enter email" : ""}
          defaultValue={userToUpdate ? userToUpdate.email : ""}
        />
        <Button butoonName={"שלח"} type={"submit"} className="w110" />
      </form>
    </div>
  );
}
