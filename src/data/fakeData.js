// ** פעילויות **
export const actions = [
   {
      _id: "null",
      orderSource: null,
      fundingSource: null,
      location: null,
      locationType: null,
      days: [1, 3, 5],
      startTime: null,
      endTime: null,
      startDate: null,
      endDate: null,
      status: null,
      lecturer: null,
      actionType: 'workshop',
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
            createdDate: new Date("11/06/2023")
         }
      ],
      tasks: [
         {
            dealine: new Date("22/07/2023"),
            details: "task 1",
            isDone: false,
         },
         {
            dealine: new Date("23/07/2023"),
            details: "task 2",
            isDone: true,
         },
         {
            dealine: new Date("27/07/2023"),
            details: "task 3",
            isDone: false,
         },
      ],
      users: ["123", "456"],
      schedules: [
         {
            date: "18/08/2023",
            lecturer: "Aviad",
            comments: "to do users name",
            status: "active"
         }
      ]
   },

]

// ** משתמשים / סטודנטים **
export const users = [
   {
      _id: "0",
      userId: "123", 
      fName: 'Avi',
      lName: "Sason",
      phone: "0505477654",
      email: "avi@gmail.com",
      participantNum: 324,
      comments: null,
      permission : "student"
   },
   {
      _id: "1",
      userId: "456",
      fName: 'Ben',
      lName: "Cohen",
      phone: "0505117614",
      email: "ben@gmail.com",
      participantNum: 345,
      comments: null,
      permission : "student"
   }
]


// TODO : 
// - settings 
// ---- object of  actionType  { color, nameHebrew , _id}
// ---- days - number to day (hebrew) {1 : "'א"}
// ---- orderSource = ["",""]
// ---- fundingSource = ["",""]