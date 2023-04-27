// Declaring and initializing variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {
    // Create a Date object from input value
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);
    
    // Check if input dates are valid
    // If valid calculate the difference
    if(date1.getTime() && date2.getTime()){
    // calculate difference in time using getTime function
    let timeDifference = date2.getTime() - date1.getTime();
    
    // convert the value of timeDifference into days cos it is in milliseconds
    // To make the number a non-negative number, we use Math.abs() function
    let dayDifference = Math.abs(timeDifference/(1000 * 3600 *24))
    output.innerHTML = `The number of days you have lived is <span> ${dayDifference} </span> days`
    } 
    // Else display the input is not valid
    else{
        output.innerHTML = "Please select a valid date"
    }
})