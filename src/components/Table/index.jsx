import styles from './style.module.css'
import { BsTrash, BsFillPencilFill } from "react-icons/bs";
import { useContext } from 'react';
import { DataContext } from '../../context';


//props: An array of objects,Delete function
//Editing function,
//Whatever you want to be displayed to the provider as an array of course,
//Task marking function

export default function Table({ data, arr, deletion, editing, TaskMarking }) {
   const tata = useContext(DataContext)
   let obj = arr ?? Object.keys(data[0])

   function tempFunck(objeckt) {
      return <tr > {obj.map(key => {
         return <>
            {key === "isDone" ? <td >
               {

                  <button className={objeckt[key] ? styles.button : styles.checknun}
                     onClick={() => TaskMarking(objeckt)}> </button>
               }
            </td> : objeckt[key] instanceof Date ? <td>{objeckt[key].toLocaleDateString()}</td>
               : <td>{objeckt[key]}</td>}</>

      })}  {deletion ? <td><button onClick={() => deletion(objeckt)}>
         <BsTrash className={styles.icons} /></button></td> : null}
         {editing ? <td><button onClick={() => editing(objeckt)}>
            <BsFillPencilFill className={styles.icons} /></button></td> : null}
      </tr>
   }

   return (

      <table className="tw">
         {/* {obj.map(val => <th>{val}</th>)} */}
         {data.map((value) => tempFunck(value)
         )}
         <tbody>
            <tr>
               <td><button className={styles.addNwe} >+</button></td>
            </tr>
         </tbody>
      </table>)
}