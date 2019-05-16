function app(){
    let morning = '6-14:15',
        afternoon = '14-22:15',
        night = '22-6:15',
        free = 'free day from work'

   
    const Employee1 = { //object of employee
        firstName: 'Janusz',
        lastName: 'Nowak',
        workingHours: [morning, afternoon, night],
        workingDay: []
    }

    function getCurrentMonth() {
        let date = new Date(),
            month = date.getMonth(),
            year = date.getFullYear(),
            currentMonth = [month, year]
        return currentMonth;
    }

    function setSchedule(employee) {
        let currentDaysOfMonth = getDaysInMonth(...getCurrentMonth()),
            randomHourWork = [];

        currentDaysOfMonth.forEach((el, index) => {
            randomHourWork.push(getRandomHours(employee.workingHours)); // var of generator num from object Employee
            if(randomHourWork[index] == night && randomHourWork[index - 1] == morning) {
                employee.workingDay.push(free);
                console.log(el + ' ' + employee.workingDay[index])
            } else if (randomHourWork[index] == morning && randomHourWork[index - 1] == night) {
                employee.workingDay.push(free);
                console.log(el + ' ' + employee.workingDay[index])
            } else if (randomHourWork[index] == morning && randomHourWork[index - 1] == afternoon) {
                employee.workingDay.push(free);
                console.log(el + ' ' + employee.workingDay[index])
            } else if (randomHourWork[index] == afternoon && randomHourWork[index - 1] == night) {
                employee.workingDay.push(free);
                console.log(el + ' ' + employee.workingDay[index])
            } else {
                employee.workingDay.push(randomHourWork[index])
                console.log(el + ' ' + employee.workingDay[index])
            }
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