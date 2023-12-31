import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import axios from "axios";

export default function MainRouter() {
   const [user, setUser] = useState(true);
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
   user?<MainLayout/>:<Login/>
   )
}
