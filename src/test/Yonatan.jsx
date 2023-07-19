import React, { useContext } from 'react'
import FormAddEdit from '../components/FormAddEdit'
import { DataContext } from '../context'
import Action from '../pages/Action'

export default function Yonatan() {
   const userToUpdate = {
      name:"user",
      lastName:"last name",
      phone:"054444511",
      email:"email",
   }
  
   const valueContext = useContext(DataContext)
   console.log(valueContext);
   return (
     
      <div>
         <Action />
{/* 
        <FormAddEdit userToUpdate={userToUpdate}  />  */}
      </div>
   )
}
