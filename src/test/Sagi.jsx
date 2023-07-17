import React, { useContext } from 'react'
import { DataContext } from '../context'
import apiCalls from '../functions/apiCalls';




export default function Sagi() {
   const context = useContext(DataContext)

   const startpopupandcallservar = () => {
      apiCalls.get("http://localhost:3008/all", context.setPopUp)
   }


   return (
      <>
         <button onClick={startpopupandcallservar} > checkpopup&server</button>
      </>
   )
}
