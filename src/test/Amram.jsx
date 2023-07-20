import React, { useContext } from 'react'
import VerifyDelete from '../components/VerfityDelete'
import { DataContext } from '../context'

export default function Amram() {
   const context = useContext(DataContext)
   return (
      <div>
         <button onClick={() => context.setPopUp(<VerifyDelete />)}   >
            click me
         </button>

      </div>
   )
}
