import React, { useState } from 'react';
import { default as CalendarComp } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from './style.module.css'

//contaxt: currentDate, activities, activity
//creator: Shay Taube

export default function Calendar(props, task) {

    const [date, setDate] = useState(new Date());
    const [activities, setActivities] = useState([]);
    const [currentDate, setCurrentDate] = useState()
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

    console.log(props.date);

    const onDayClick = (value) => {
        const formattedDate = value.toLocaleDateString('en-GB').split('/').reverse().join('-');
        setCurrentDate(formattedDate)

        // props.funciton(formattedDate)
        // console.log(props.funciton);




        const activity = prompt('add a task');

        if (activity) {
            setActivities(prevActivities => [
                ...prevActivities,
                { date: formattedDate, activity }
            ]);
        }
    };
    console.log(props.funciton);
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
            <CalendarComp
                onChange={onChange}
                value={date}
                onClickDay={onDayClick}
                tileContent={tileContent}
            />
        </div>
    );
}
