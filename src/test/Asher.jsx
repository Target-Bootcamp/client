import { useContext } from 'react';
import Table from '../components/Table'
import { DataContext } from '../context';
export default function Asher() {
   let arr = ["details", "isDone"]
   function del(val) {
      console.log(val);
   }
   const data = useContext(DataContext)
   console.log(data.actions[0].tasks);

   return (

      <div><Table data={data.users} deletion={del} editing={del} /></div>
   )
}
