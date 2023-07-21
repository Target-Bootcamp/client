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
            'date': '17.7.2023',
            'activity': "קורס פול סטאק"
        },
        {
            'date': '18.7.2023',
            'activity': "קורס פול סטאק"
        },
        {
            'date': '19 .7.2023',
            'activity': "קורס פול סטאק"
        }]

    const onChange = (date) => {
        setDate(date);
    };

    // console.log(props.date);

    const onDayClick = (value) => {
        const formattedDate = value.toLocaleDateString();
        setCurrentDate(formattedDate)

        // props.funciton(formattedDate)
        // console.log(props.funciton);
        console.log(value.toLocaleDateString());




        const activity = prompt('add a task');

        if (activity) {
            setActivities(prevActivities => [
                ...prevActivities,
                { date: formattedDate, activity }
            ]);
        }
    };
    // console.log(props.funciton);


    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const formattedDate = date.toLocaleDateString();
            function sendMonth() {
                if (formattedDate.includes("15")) {
                    const fullMidMonth = formattedDate.split(".")

                    const midMonth = fullMidMonth[1] + "." + fullMidMonth[2]
                    // console.log(midMonth);
                    // props.funciton(midMonth)
                    // props.onClickMonth(midMonth)
                }
            }
            sendMonth()
            // console.log(formattedDate);
            const dayActivities = activities.find(item => item.date === formattedDate);
            const dayActivityBank = activityBank.find(item => item.date === formattedDate);
            // const dateActivity =props.month.find(item => item.date === formattedDate);
            // console.log(activityBank);
            if (dayActivities || dayActivityBank) {
                return (
                    <div className={style.customTileContent}>
                        <div className={style.activityMarker}></div>
                        {/* <span>*</span> */}
                    </div>
                );
            }
        }
        return null;
    };


    return (
        <div className={style.hiro}>
            <CalendarComp
                onChange={onChange}
                value={date}
                locale="he"
                onClickDay={onDayClick}
                tileContent={tileContent}
            />
        </div>
    );
}
