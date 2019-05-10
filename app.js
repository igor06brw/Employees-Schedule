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
            currentMonth = [month + ' ' + year]
        console.log(currentMonth);
        return currentMonth;
    }

    function setSchedule(employee) {
        console.log(typeof getRandomHours(employee.workingHours))
        // arrDays.forEach(el => {
        //     console.log(el + ' ' + getRandomHours(employee.workingHours));
        // });  
    }

    function getRandomHours(workingHours) {
        let workHours = workingHours[Math.floor(Math.random()*workingHours.length)]
        return workHours; 
    }

    function displaySchedule(arg) {

    }

    function getDaysInMonth(month, year) {
        // Since no month has fewer than 28 days
        let date = new Date(year, month, 1),
            days = [];
   
        while (date.getMonth() === month) {
           days.push(new Date(date));
           date.setDate(date.getDate() + 1);
        }
        return days;
   }
    
    
   setSchedule(Employee1);
}
app();