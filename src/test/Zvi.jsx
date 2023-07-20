import React, { useContext, useState } from 'react'
import PageHeader from '../components/pageHeader'
import { DataContext } from '../context'
import Files from '../pages/Files'
import Common from '../components/Common'

export default function Zvi() {
   const context =useContext(DataContext)
const [files,setFiles]=useState([])
   return (
      <div >
<button onClick={()=>context.setPopUp(<div>gshbghsdfhb</div>)}>+</button>
         {/* <Files/> */}
         {/* <PageHeader pageName={"תלמידים"} actionType={"workshop"}/> */}
         {/* <Common stet={files} setStet={setFiles}/> */}
      </div>
   )
}
