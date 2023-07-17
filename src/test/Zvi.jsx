import React, { useContext } from 'react'
import PageHeader from '../components/pageHeader'
import { DataContext } from '../context'

export default function Zvi() {
   // const context =useContext(DataContext)
   return (
      <div >
         <PageHeader pageName={"תלמידים"} actionType={"workshop"}/>
      </div>
   )
}
