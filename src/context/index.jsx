import { useState } from "react"
import { createContext } from "react"
import fakeData from './data/fakeData'

export const DataContext = createContext({})

//creator:sagi
export default function MainContext({ children }) {

   const settingsObj = {
      actionType: fakeData.actionsTypes,
      days: fakeData.days,
      fundingSource: fakeData.fundingSource,
      orderSource: fakeData.orderSource
   }

   const [actions, setAction] = useState(fakeData.actions)
   const [users, setUsers] = useState(fakeData.users)
   const [settings, setSetings] = useState(settingsObj)


   return (
      <DataContext.Provider value={{ actions, setAction, users, setUsers, settings, setSetings }} >
         {/* // <DataContext.Provider value={{ actions:[actions, setAction], [users, setUsers], [settingData, setSetingData] }} > */}
         <>{children}</>
      </DataContext.Provider>
   )
}
