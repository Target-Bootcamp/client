import React, { useContext } from 'react'
import { DataContext } from '../../context';



 
 
 function getDatesBetween(startDateString, endDateString, daysToSearch) {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const datesBetween = [];

    while (startDate <= endDate) {
        const dayOfWeek = startDate.getDay();

        if (daysToSearch.includes(dayOfWeek)) {
            datesBetween.push(new Date(startDate));
        }

        startDate.setDate(startDate.getDate() + 1);
    }

    return datesBetween;
}

 export default {getDatesBetween} 


        
       
 
