import React from 'react'
import Search from '../components/Search'



function Efraim() {
   return (
      <div>
         <Search placeholder={"גוף מזמין..."} data={"fundingSource"} />
         <Search placeholder={"גוף מממין..."} data={"orderSource"} />

      </div>

   )
}

export default Efraim