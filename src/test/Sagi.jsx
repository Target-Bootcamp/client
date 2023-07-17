import React, { useContext } from 'react'
import { DataContext } from '../context'


export default function Sagi() {
   const context = useContext(DataContext)
   console.log(context);
   return (
      <div>Sagi</div>
   )
}
