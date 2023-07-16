import { useState } from "react"
import { createContext } from "react"

const DataContext = createContext({})


export default function MainContext({ children }) {

   const [fakeData, setFakeData] = useState()
   const [action, setAction] = useState()
   const [settingData, setSetingData] = useState()


   return (
      <DataContext.Provider value={{ fakeData, setFakeData, action, setAction, settingData, setSetingData }} >
         <>{children}</>
      </DataContext.Provider>
   )
}
