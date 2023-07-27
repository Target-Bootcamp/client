import styles from './style.module.css'
import {MdOutlineDelete  } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/Io";
import { useContext } from 'react';
import { DataContext } from '../../context';
import FormAddEdit from '../FormAddEditStudent';


//props: An array of objects,Delete function
//Editing function,
//Whatever you want to be displayed to the provider as an array of course,
//Task marking function

export default function Table({ data = [], arr, deletion, editing, TaskMarking, add }) {
   const tata = useContext(DataContext)
   let obj = arr ?? Object.keys(data[0])

   function tempFunck(objeckt) {
      return <tr> {obj.map(key => {
         return <>
            {key === "isDone" ? <td >
               {

                  <button className={objeckt[key] ? styles.button : styles.checknun}
                     onClick={() => TaskMarking = { objeckt }} > </button>
               }
            </td> : objeckt[key] instanceof Date ? <td>{objeckt[key].toLocaleDateString()}</td>
               : <td>{objeckt[key]}</td>}</>

      })}  {deletion ? <td><button onClick={() => deletion(objeckt)}>
         <MdOutlineDelete className={styles.icons} /></button></td> : null}
         {editing ? <td><button onClick={() => editing(objeckt)}>
            <CiEdit className={`${styles.icons}`} /></button></td> : null}
      </tr>
   }

   return (

      <table className="tw">
         {/* {obj.map(val => <th>{val}</th>)} */}
         {data.map((value) => tempFunck(value)
         )}
         <tbody>
            <tr>
               <td className='alignSelf'><button onClick={() => add()} ><IoIosAddCircleOutline className={styles.iconAddStudent} /></button></td>
            </tr>
         </tbody>
      </table>)
}