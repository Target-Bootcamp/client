import React, { useState } from 'react'
import InputDate from '../components/InputDate'

export default function Eli() {
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();

   console.log(startDate);
   console.log(endDate);
   return (
      <div>
         <InputDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate} />
      </div>
   )
};
