import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import axios from "axios";
import { useParams } from 'react-router';

export default function MainRouter() {
   const [user, setUser] = useState(false);
   const parms = useParams()
   useEffect(()=>{
      getUser()
   },[])

   const getUser = ()=>{
      setUser(true)
      // axios.get(`blablabla/users/ ${localStorage.token}`)
      // .then(response=>setUser(response))
      // .catch(error=>{
      //    console.log(error)
      //    setUser(false)
      // })
   }
   return (
      <Routes>
         <Route
          path="/*"
          element={
          user?
            <MainLayout
               active={false}
               contentChilden={<div>main active</div>}
               navChilden={<div>main active</div>}
            />:<Login/>
          }/>
         
      </Routes>
   )
}
