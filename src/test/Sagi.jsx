import React, { useContext } from 'react'
import { DataContext } from '../context'
import Popup from '../layout/Popup';
import Template from '../components/Template';
import Asher from './Asher';




export default function Sagi() {
   const context = useContext(DataContext)
   // console.log(context);

   console.log(context.PopUp);
   return (
      <>
         <button onClick={() => context.setPopUp(<Asher />)} > popup</button>
      </>
   )
}
