import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export default function MainRouter() {
   const [user, setUser] = useState(false);
   useEffect(()=>{

   },[])
   const getUser = ()=>{
      setUser(localStorage.getItem("user")?localStorage.getItem("user"):false)
   }
   return (
      <Routes>
         <Route
          path="/"
          element={
          <MainLayout
            active={false}
            contentChilden={<div>main active</div>}
            navChilden={<div>main active</div>}
          />
         }
          />

      </Routes>
   )
}
