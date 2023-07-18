import React, { useContext } from 'react'
import FormAddEdit from '../components/FormAddEdit'
import { DataContext } from '../context'

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
         <button onClick={()=> valueContext.setPopUp( <FormAddEdit userToUpdate={userToUpdate}  /> )}>
            click
         </button>
         <FormAddEdit /> 
      </div>
   )
}
