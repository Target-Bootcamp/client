import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Shay() {
   const [date, setDate] = useState(new Date());
   const [activities, setActivities] = useState([]);
   const activityBank = [
      {
         'date': '2023-07-17',
         'activity': "קורס פול סטאק"

      },
      {
         'date': '2023-07-18',
         'activity': "קורס פול סטאק"
      },
      {
         'date': '2023-07-20',
         'activity': "קורס פול סטאק"

      }]

   const onChange = (date) => {
      setDate(date);
   };

   const onDayClick = (value) => {
      const formattedDate = value.toLocaleDateString('en-GB').split('/').reverse().join('-');
      const activity = prompt('add a task');

      if (activity) {
         setActivities(prevActivities => [
            ...prevActivities,
            { date: formattedDate, activity }
         ]);
      }
   };
   console.log(activities);
   const tileContent = ({ date, view }) => {
      if (view === 'month') {
         const formattedDate = date.toLocaleDateString('en-GB').split('/').reverse().join('-');

         const dayActivities = activities.find(item => item.date === formattedDate);
         const dayActivityBank = activityBank.find(item => item.date === formattedDate);

         if (dayActivities || dayActivityBank) {
            return (
               <div className="custom-tile-content">
                  <div className="activity-marker"></div>
                  <span>*</span>
               </div>
            );
         }
      }
      return null;
   };


   return (
      <div>
         <Calendar
            onChange={onChange}
            value={date}
            onClickDay={onDayClick}
            tileContent={tileContent}
         />
      </div>
   );
}
