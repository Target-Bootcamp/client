import { useState } from "react"
import data from './data.json'
import styles from './style.module.css'
// import { icons } from "react-icons"




 export default function Table({deleteFn, list, }) {
 const [dataJson,setDataJson] = useState(data)
 //props.data
//  let funk = [props.deletion,props,editing]
    let obj = Object.keys(dataJson[0])

    function tempFunck (objeckt) {
      const obj = Object.keys(objeckt)
      // console.log(obj);
      let value = []
      for (let i =0; i < obj.length ; i++){
         const name  = obj[i];
          value.push(objeckt[name]);
        }
      return <tr> {value.map(val=>{
         // if (funk.length<0){
         //     return (<><td><button onClick={()=>props.deletion(val)}>❌</button></td>
         //       <td><button onClick={()=>props.editing(val)}>editing</button></td> 
         //       </>)}
      

         
          return <td>{val}</td>})}
           </tr>
          }

return( <table>{ obj.map(val => <th>{val}</th>)}
   

  { dataJson.map( ( value ) => tempFunck  (value)
  )}


</table>)
}