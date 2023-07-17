import styles from './style.module.css'
import { BsTrash, BsFillPencilFill } from "react-icons/Bs";


//props: An array of objects,Delete function
//Editing function,
//Whatever you want to be displayed to the provider as an array of course,
//Task marking function

export default function Table(props) {
   let obj = props.arr ?? Object.keys(props.data[0])

   function tempFunck(objeckt) {
      return <tr > {obj.map(key => {
         return <>
            {key === "isDone" ? <td >
               {

                  <button className={objeckt[key] ? styles.button : styles.checknun}
                   onClick={() => props.TaskMarking(objeckt)}> </button>
               }
            </td> : <td>{objeckt[key]}</td>}</>

      })}  {props.deletion ? <td><button onClick={() => props.deletion(objeckt)}>
         <BsTrash className={styles.icons} /></button></td> : null}
         {props.editing ? <td><button onClick={() => props.editing(objeckt)}>
            <BsFillPencilFill className={styles.icons} /></button></td> : null}
      </tr>
   }

   return (
      <table className={styles.tw}>{obj.map(val => <th>{val}</th>)}
         {props.data.map((value) => tempFunck(value)
         )}
      </table>)
}