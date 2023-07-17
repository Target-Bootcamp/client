import styles from './style.module.css'
import { BsTrash, BsFillPencilFill } from "react-icons/Bs";

export default function Table(props) {
   let obj = props.arr ?? Object.keys(props.data[0])

   function tempFunck(objeckt) {
      return <tr> {obj.map(key => {
         return <td>{objeckt[key]}</td>
      })}  {props.deletion ? <td><button onClick={() => props.deletion(objeckt)}><BsTrash /></button></td> : null}
         {props.editing ? <td><button onClick={() => props.editing(objeckt)}><BsFillPencilFill /></button></td> : null}

      </tr>
   }

   return (<table>{obj.map(val => <th>{val}</th>)}


      {props.data.map((value) => tempFunck(value)
      )}


   </table>)
}