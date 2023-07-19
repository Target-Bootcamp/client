import React, { useContext } from 'react'
import MainLayout from '../layout/MainLayout'
import Accordion from '../components/Accordion'
import { DataContext } from '../context'

export default function Avraham() {
   const context = useContext(DataContext)
   return (
      <>
         {/* <Accordion items={context.actions}/> */}
         avrhahm 
      </>
   )
}
