import { useState } from "react"
import { createContext } from "react"
import fakeData from '../data/fakeData'
import Popup from "../layout/Popup"

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
   const [popUp, setPopUp] = useState()
   const [isActive, setIsActive] = useState(false)

   return (
      <DataContext.Provider value={{ actions, setAction, users, setUsers, settings, setSetings, popUp, setPopUp, isActive, setIsActive }} >
         <>{children}  {popUp && <Popup />}</>
      </DataContext.Provider>
   )
}
