import Table from '../components/Table'

export default function Asher() {
   let arr = ["name","email"]
   function del(val) {
      console.log(val);
   }

   return (
      <div><Table data={[{name:"a",email:"b"},{name:"a",email:"b"}]} deletion={del} editing={del} arr ={arr} /></div>
   )
}
