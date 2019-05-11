function app(){
    let morning = '6-14:15',
        afternoon = '14-22:15',
        night = '22-6:15'

   
    const Employee1 = { //object of employee
        firstName: 'Janusz',
        lastName: 'Nowak',
        workingHours: [morning, afternoon]
    }

    function getCurrentMonth() {
        let date = new Date(),
            month = date.getMonth(),
            year = date.getFullYear(),
            currentMonth = [month, year]
        return currentMonth;
    }

    function setSchedule(employee) {
        let currentDaysofMonth = getDaysInMonth(...getCurrentMonth())
        // console.log(getDaysInMonth(...getCurrentMonth()) + getRandomHours(employee.workingHours)) // 0 - Styczeń, 1- Luty
        currentDaysofMonth.forEach(el => {
            console.log(el + ' ' + getRandomHours(employee.workingHours));
        });  
    }

    function getRandomHours(workingHours) {
        let workHours = workingHours[Math.floor(Math.random()*workingHours.length)]
        return workHours; 
    }

    function getDaysInMonth(month, year) {
        // Since no month has fewer than 28 days
        let days = [],
            date = new Date(year, month, 1)
            
   
        while (date.getMonth() === month) {
            days.push(new Date(date).toString().substring(0,15));
            date.setDate(date.getDate() + 1);
        }
        return days;
   }

//    function _getDaysInMonth(month, year) {
//        let month = month.getMonth(),
//            year = year.getFullYear(),
//            days = [];

//         while (date.getMonth() === month) {
//                 days.push
//             }
//    }
    
    
  setSchedule(Employee1);
}
app();