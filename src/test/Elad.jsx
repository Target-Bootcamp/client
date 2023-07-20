import React, { useContext, useState } from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button';
import { DataContext } from '../context';
import GetDayName from '../functions/getDay';

export default function Elad({ butoonName }) {
   const [inputValue, setInputValue] = useState([{}]);
   const handleInputChange = (event) => {
      setInputValue(event.target.value)
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      // let fname = event.target.fname.value
      // let lname = event.target.lname.value
      // let age = event.target.age.value
      // console.log(fname,lname,age); 
   };

   // const [deyname,setdeyname] = useState("")





   const testdey = GetDayName('19/07/2023');
   return (
      // <form onSubmit={handleSubmit}>
      //    <InputText onChange={handleInputChange} name ="fname" placeholder="fname"/>
      //    {<InputText onChange={handleInputChange} name="lname" placeholder="lname"/>
      //    <InputText onChange={handleInputChange} name="age" placeholder="age"/>}

      //    <button type="submit">Submit</button>
      // <Button className="w154" butoonName={"תלמידים"} onClick={()=> console.log("good")}/>

      // </form>
      <div>
         {testdey}
      </div>
   )

}
