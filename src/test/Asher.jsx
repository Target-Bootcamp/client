import React from 'react'
import Table from '../components/Table/index'
import data from './data.json'

export default function Asher() {
   let arr = ["name","email"]
   function del(val) {
      console.log(val);
   }

   return (
      <div><Table data={data} deletion={del} editing={del} arr ={arr} /></div>
   )
}
