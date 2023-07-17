import { useState } from "react"
import { createContext } from "react"
import fakeData from '../data/fakeData'

export const DataContext = createContext({})

//creator:sagi
export default function MainContext({ children }) {

   const settingsObj = {
      actionType: fakeData.actionTypes,
      days: fakeData.days,
      fundingSource: fakeData.fundingSource,
      orderSource: fakeData.orderSource
   }
   const [actions, setAction] = useState(fakeData.actions)
   const [users, setUsers] = useState(fakeData.users)
   const [settings, setSetings] = useState(settingsObj)
   const [isActive, setIsActive] = useState(false)


   return (
      <DataContext.Provider value={{ actions, setAction, users, setUsers, settings, setSetings,isActive, setIsActive }} >
         <>{children}</>
      </DataContext.Provider>
   )
}
