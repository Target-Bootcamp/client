import React, { useState } from 'react'

export default function Itamar() {
const [start , setstart]= useState ([])
const [finish , setfinish]= useState ([])

const hours = [2,4,6,8]

function CangeNumber(e){

console.log  (e.targt.value)

}









return(


   <div>
      <div>
        <label>שעות לימוד</label>
  <select onChange={(e)=>CangeNumber(e)} name="hours1" id="abc">

   {hours.map((item,i)=> {
   return <option >{item}</option>
   }
)}
  </select>
  </div>
  <br />
<div>
<label>שעות סיום</label>
  <select name="hours1" id="abc">

   {hours.map((item,i)=> {
   return <option className={item}>{item}</option>
   }
)}
  </select>

   



</div>



  </div>


      )      
   









}

    
