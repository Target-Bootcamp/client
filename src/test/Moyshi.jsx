import React, { useEffect, useState } from 'react'
import DropDown from '../components/DropDown'
import ForgotPasswordComponent from '../pages/ForgotPasswordComponent'

export default function Moyshi() {
   const [a,setA] = useState()
   useEffect(()=>{
      console.log(a);
   },[a])
   return (
      <div>
         <DropDown setSelect={setA}/>
         <ForgotPasswordComponent / >

      </div>
   )
}
