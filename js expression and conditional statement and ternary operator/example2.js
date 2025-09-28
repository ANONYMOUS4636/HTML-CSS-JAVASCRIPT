let day="monday";
switch (day){
    case "sunday":
        console.log("weekend");
        break;
    case "saturday":
        console.log("weekend");
        break;
    default:
        console.log("weekdays")
        break;
}




// official solution
function checkDay(day) {
    switch (day) {
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Weekday");
    }
}

// Test the function
checkDay("Monday");   // Output: Weekday
checkDay("Sunday");   // Output: Weekend
