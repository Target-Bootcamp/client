import React, { useContext } from 'react'
import { DataContext } from '../context'
import apiCalls from '../functions/apiCalls';




export default function Sagi() {
   const context = useContext(DataContext)

   // const startpopupandcallservar = () => {
   //    apiCalls.get("http://localhost:7777/all", context.setPopUp)
   // }
   return (
      <>
         <button onClick={() => context.setPopUp("ok")} > checkpopup&server</button>
         {/* <button>popup</button> */}
      </>
   )
}
