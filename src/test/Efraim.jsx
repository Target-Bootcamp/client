import React from 'react'
import Search from './Search'



function Efraim() {
   return (
      <div>
         <Search placeholder={"גוף מזמין..."} data={"fundingSource"} />
         <Search placeholder={"גוף מממין..."} data={"orderSource"} />

      </div>

   )
}

export default Efraim





















// import React, { useState } from 'react'
// // import Search from './Search'
// import products from './products.json'

// export default function Efraim() {
//    const [value, setValue] = useState('')
//    const [json] = [products]

//    const onChange = (event => {
//       setValue(event.target.value)
//    })
//    return (
//       <div>
//          <input type="text" value={value} onChange={onChange}
//          // onInput={(event) => event.target.value.length > 2 ? <Search val={event.target.value} /> : null}
//          />
//       </div>
//    )
// }

