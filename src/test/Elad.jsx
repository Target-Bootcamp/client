import React, { useState } from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button';

export default function Elad({butoonName}) {
   const [inputValue, setInputValue] = useState([{}]);

   const handleInputChange = (event) => {
      setInputValue(event.target.value)
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      let fname = event.target.fname.value
      // let lname = event.target.lname.value
      // let age = event.target.age.value

      // console.log(fname,lname,age); 
   };
   return (
      // <form onSubmit={handleSubmit}>
      //    <InputText onChange={handleInputChange} name ="fname" placeholder="fname"/>
      //    {/* <InputText onChange={handleInputChange} name="lname" placeholder="lname"/>
      //    <InputText onChange={handleInputChange} name="age" placeholder="age"/> */}

      //    <button type="submit">Submit</button>

      // </form>
         <Button className="w154" butoonName={"תלמידים"} onClick={()=> console.log("good")}/>
   )
}
