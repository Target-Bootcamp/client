import React, { useEffect, useState } from 'react'
import DropDown from '../components/Template/DropDown'

export default function Moyshi() {
   const [a,setA] = useState()
   useEffect(()=>{
      console.log(a);
   },[a])
   return (
      <div><DropDown setSelect={setA}/></div>
   )
}
