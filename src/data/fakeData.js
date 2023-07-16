export const actions = [
   {
      orders: null,
      funding: null,
      location: null,
      locationType: null,
      studyDays: [1, 2, 3, 4, 5, 6, 7],
      startTime: null,
      endTime: null,
      startDate: null,
      endDate: null,
      status: null,
      lecturer: null,
      _id: null,
      type: null,
      actionType: 'workshop',
      name: 'full stack',
      files: [
         {
            fileName: "a",
            fileType: '.txt',
            size: "24kb",
            createdDate: "12/04/2023"
         },
         {
            fileName: "images",
            fileType: 'directory',
            size: "20mb",
            createdDate: "11/06/2023"
         },
         {
            fileName: "b",
            fileType: '.txt',
            size: "24kb",
            createdDate: "12/04/2023"
         },
         {
            fileName: "index",
            fileType: 'js',
            size: "24kb",
            createdDate: "12/04/2023"
         }
      ],
      missions: [
         {
            dedLine: null,
            detail: null,
            status: null,
         },
         {
            dedLine: null,
            detail: null,
            status: null,
         },
         {
            dedLine: null,
            detail: null,
            status: null,
         },
         {
            dedLine: null,
            detail: null,
            status: null,
         },
         {
            dedLine: null,
            detail: null,
            status: null,
         }
      ],
      users: ["123456", "123123123"],
      schedule: [
         {
            date: "18/08/2023",
            lecturer: "Aviad",
            comments: "to do users name",
            status: "active"

         }
      ]
   },

]


export const users = [
   {
      _id: "0",
      userId:"123456",
      fName: 'Avi',
      lName: "Sason",
      phone: 0,
      email: null,
      participantNum: 0,
      comments: null
   },
   {
      _id: "1",
      userId:"123123123",
      fName: 'Avi',
      lName: "Sason",
      phone: 0,
      email: null,
      participantNum: 0,
      comments: null
   }
]


