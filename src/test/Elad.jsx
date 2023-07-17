import React, { useState } from 'react'
import InputText from '../components/InputText'

export default function Elad() {
   const [inputValue, setInputValue] = useState([{}]);

   const handleInputChange = (event) => {
      setInputValue(event.target.value)
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      let fname = event.target.fname.value
      let lname = event.target.lname.value
      let age = event.target.age.value

      console.log(fname, lname, age);
   };
   return (
      <div style={{overflowY:'scroll', height: "100%",}}>
         <form onSubmit={handleSubmit}>
            <InputText onChange={handleInputChange} name="fname" placeholder="fname" />
            <InputText onChange={handleInputChange} name="lname" placeholder="lname" />
            <InputText onChange={handleInputChange} name="age" placeholder="age" />

            <button type="submit">Submit</button>
         </form>
      </div>
   )
}
