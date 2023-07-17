import React, { useContext } from 'react'
import PageHeader from '../components/pageHeader'
import { DataContext } from '../context'
import Files from '../pages/Files'

export default function Zvi() {
   // const context =useContext(DataContext)

   return (
      <div >
         <Files/>
         {/* <PageHeader pageName={"תלמידים"} actionType={"workshop"}/> */}
      </div>
   )
}
