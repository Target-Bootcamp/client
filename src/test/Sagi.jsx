import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context'
import apiCalls from '../functions/apiCalls';


export default function Sagi() {
   useEffect(() => {
      apiCalls.get('/actions/64b7a473e400aa13afad6e78')
         .then(console.table)
         .catch(console.warn)

   }, [])
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
