import React, { useContext } from 'react'
import FormAddEdit from '../components/FormAddEditStudent'
import { DataContext } from '../context'
import Action from '../pages/Action'

export default function Yonatan() {
   const userToUpdate =  {
      _id: "1",
      userId: "123",
      fName: 'Avi',
      lName: "Sason",
      phone: "0505477654",
      email: "avi@gmail.com",
      participantNum: 324,
      comments: null,
      permission: "student"
   };

  
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
