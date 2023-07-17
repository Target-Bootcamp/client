// ** פעילויות **
export const actions = [
   {
      _id: "aaa111",
      type: 'class',
      name:'yaov',
      email:'gtrhyt@gmail.com',
      date:new Date ()
   }

]

// ** משתמשים / סטודנטים **
export const users = [
   {
      _id: "1",
      userId: "123",
      fName: 'Avi',
      lName: "Sason",
      phone: "0505477654",
      email: "avi@gmail.com",
      participantNum: 324,
      comments: null,
      permission: "student"
   },
   {
      _id: "2",
      userId: "456",
      fName: 'Ben',
      lName: "Cohen",
      phone: "0505117614",
      email: "ben@gmail.com",
      participantNum: 345,
      comments: null,
      permission: "student",
   }
   , {
      _id: "3",
      userId: "789",
      fName: 'sagi',
      lName: "buta",
      phone: "0547658620",
      email: "sagi@gmail.com",
      participantNum: 111,
      comments: null,
      permission: "admin",
   }
]

export const actionTypes = [
   {
      _id: "111qqq",
      actionType: "workshop",
      nameHebrew: "סדנה",
      colors: {
         primary: "#76C6D1",
         secondary: "#FEC130",
         silver: "#BEBEBE"
      },
      font: "Assistant , sans-serif"
   }
   ,

   {
      _id: "222qqq",
      actionType: "course",
      nameHebrew: "קורס",
      colors: {
         primary: "#76C6D1",
         secondary: "#FEC130",
         silver: "#BEBEBE"
      },
      font: "Assistant , sans-serif"
   }
]

export const days =
{
   day1: "'א",
   day2: "'ב",
   day3: "'ג",
   day4: "'ד",
   day5: "'ה",
   day6: "'ו",
   day7: "'ז",
}


export const orderSource = ["עריית בני ברק", "מועצה אזורית מטה בנימין"]

export const fundingSource = ["משרד הכלכלה", `מגע"ר`]

export default ({ actions, users, actionTypes, days, orderSource, fundingSource })



// TODO :
// ---- days - number to day (hebrew) {1 : "'א"}
// ---- object of  actionType  { color, nameHebrew , _id}
// - settings
// ---- orderSource = ["",""]
// ---- fundingSource = ["",""]