import React, { useContext } from 'react'
import { DataContext } from '../context'
import apiCalls from '../functions/apiCalls';




export default function Sagi() {
   const context = useContext(DataContext)
   console.log(context);

   // const startpopupandcallservar = () => {
   //    apiCalls.get("http://localhost:7777/all", context.setPopUp)
   // }


   return (
      <>
         {/* <button onClick={startpopupandcallservar} > checkpopup&server</button> */}
         <button>popup</button>
      </>
   )
}
