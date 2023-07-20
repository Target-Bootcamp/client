import React from 'react'
import SelectButtons from '../components/selectButtons'

export default function Amram() {
   return (
      <div>
         <SelectButtons
            className={'w94'}
            isSingleChoice={true}
            options={[
               { text: ' כיתה חיצונית', value: 'external class' },
               { text: 'קורס', value: 'course' }, { text: 'סדנה', value: 'workshop' }, { text: 'מכינה', value: 'prep' },
               { text: 'יום א', value: 1 }, { text: 'יום ב', value: 2 }, { text: 'יום ג', value: 3 }, { text: 'יום ד', value: 4 }, { text: 'יום ה', value: 5 }, { text: 'יום ו', value: 6 }
            ]}
         />


      </div>
   )
}
