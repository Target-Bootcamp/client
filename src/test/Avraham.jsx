import React, { useContext } from 'react'
import MainLayout from '../layout/MainLayout'
import Accordion from '../components/Accordion'
import { DataContext } from '../context'
import Login from '../pages/Login'
import InputHours from '../components/InputHours'
import Calendar from 'react-calendar'
import CardDashboard from '../components/CardDashboard'

export default function Avraham() {
   const context = useContext(DataContext)
   return (
      <>
         {/* <Login/> */}
         {/* <Calendar/> */}
         <CardDashboard/>
      </>
   )
}
