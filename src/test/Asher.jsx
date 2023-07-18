
import { useContext } from 'react';
import Table from '../components/Table'
import { DataContext } from '../context';
export default function Asher() {
   let arr = ["details", "isDone"]




   function del(val) {
      console.log(val);
   }
   const data = useContext(DataContext)
   // console.log(data.actions[0].tasks);
   // const aa = new Date().toLocaleDateString()

   // console.log(aa);
   return (

      <div><Table data={data.actions[0].tasks} deletion={del} editing={del} /></div>
   )
}
