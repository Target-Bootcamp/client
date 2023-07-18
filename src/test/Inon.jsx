import React from 'react'
import Accordion from '../components/Accordion'
import { DataContext } from '../context';
import { useContext } from 'react';



let exsempol = [
   {
      _id: "null",
      orderSource: "עריית בני ברק",
      fundingSource: "משרד הכלכלה",
      location: "בני ברק",
      locationType: 1,
      days: [1, 5],
      startTime: "16:30",
      endTime: "21:30",
      startDate: new Date("01/01/2023"),
      endDate: new Date("01/08/2023"),
      status: 1,
      lecturer: "yosef",
      actionType: 'workshop',
      name: 'full stack',
      files: [
         {
            fileName: "syllabus-fs",
            fileType: 'txt',
            size: "2433",
            createdDate: new Date("12/04/2022")
         },
         {
            fileName: "images01",
            fileType: 'jpg',
            size: "202131",
            createdDate: new Date("11/06/2023")
         }
      ],
      tasks: [
         {
            deadline: new Date("22/07/2023"),
            details: "task 1",
            isDone: false,
         },
         {
            deadline: new Date("23/07/2023"),
            details: "task 2",
            isDone: true,
         },
         {
            deadline: new Date("27/07/2023"),
            details: "task 3",
            isDone: false,
         },
      ],
      users: ["123", "456", "789"],
      schedules: [
         {
            date: "16/07/2023",
            lecturer: "Aviad",
            comments: "to do users name",
            status: "active"
         },
         {
            date: "20/08/2023",
            lecturer: "Aviad",
            comments: "to do users  last name",
            status: "active"
         }
      ]
   },
   {
      _id: "null",
      orderSource: "מועצה איזורית מטה בינימין",
      fundingSource: `מגע"ר`,
      location: "טלמון",
      locationType: 2,
      days: [1, 4],
      startTime: new Date("09:00"),
      endTime: new Date("16:00"),
      startDate: new Date("10/11/2023"),
      endDate: new Date("10/11/2024"),
      status: 2,
      lecturer: "אביעד",
      actionType: 'course',
      name: 'full stack',
      files: [
         {
            fileName: "syllabus-fs",
            fileType: 'txt',
            size: "2433",
            createdDate: new Date("12/04/2023")
         },
         {
            fileName: "images01",
            fileType: 'jpg',
            size: "202131",
            createdDate: new Date("11/06/2023"),
         }
      ],
      tasks: [
         {
            deadline: new Date("22/07/2023"),
            details: "task 1",
            isDone: false,
         },
         {
            deadline: new Date("23/07/2023"),
            details: "task 2",
            isDone: true,
         },
         {
            deadline: new Date("27/07/2023"),
            details: "task 3",
            isDone: false,
         },
      ],
      users: ["123", "456", "789"],
      schedules: [
         {
            date: "09/07/2023",
            lecturer: "Aviad",
            comments: "to do users name",
            status: "active"
         }
         , {
            date: "12/07/2023",
            lecturer: "Aviad",
            comments: "to do users  last name",
            status: "active"
         }
      ]
   }

]


export default function Inon() {
   const data = useContext(DataContext);
   return (
      <Accordion items={data.actions} />
   )
}
