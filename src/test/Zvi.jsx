import React, { useState } from 'react';
import Common from '../components/Common';

export default function Zvi() {
   const[file,setFile]=useState([]);
   // function hndleFrom(e){
   //    e.preventDefault();
   //    const file=e.target.myfile.value;
   //    console.log(file);
   // }
   return (
      <div>
      <form>

         <Common stet={file} setStet={setFile}/>
         </form>
         {console.log(file)}
      </div>
   )
}
