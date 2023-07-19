
import { useContext } from 'react';
import Cards from '../components/Cards';
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
      // <div className={styles.main}>
      //   <div className={styles.right}>
      //       <Cards which={right} />
      // //   </div></div>
       <div><Table data={data.actions[0].files} deletion={del} editing={del} /></div>
     
   )
}
