console.log("Hello World!")

// Submit function that will colect our input into variables.
// Calculate monthly cost
// Append new employee to the DOM
// Clear the inputs
// If monthly cost is > $20,000 make background of footer red.
// Delete button that removes employee from the DOM, does not need to affect the total monthly.



// * Submit function that will colect our input into variables.

let totalAnnualSalary = 0

function submitHandler(event) {
    event.preventDefault()
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const idNumber = document.getElementById("idNumber").value
    const jobTitle = document.getElementById("jobTitle").value
    const annualSalary = document.getElementById("annualSalary").value

    console.log("Hello I'm submitting an employee's data here:", firstName, ' ', lastName, ' ', idNumber, ' ', jobTitle, ' ', annualSalary);

    console.log("total annual salary", totalAnnualSalary);
    totalAnnualSalary += Number(annualSalary)
    console.log("total annual salary", totalAnnualSalary);

    const employeeData = document.getElementById("employeeData")

    // * append inputed data to DOM
    employeeData.innerHTML += `
         <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>#${idNumber}</td>
        <td>${jobTitle}</td>
        <td class='annualSalary'>$${annualSalary}</td>
        <td><button onCLick='deleteHandler(event)'>Delete</button></td>
      </tr>
    `

    // * Clear input fields
    document.getElementById("firstName").value = ''
    document.getElementById("lastName").value = ''
    document.getElementById("idNumber").value = ''
    document.getElementById("jobTitle").value = ''
    document.getElementById("annualSalary").value = ''

    // * calculate total monthly value
    const monthlyTotalNumber = document.getElementById("monthlyTotalNumber")
    const monthlyTotalSalary = totalAnnualSalary / 12
    console.log("Monthly Total Salary:", monthlyTotalSalary);

    // * Append monthlyTotalSalary to DOM
    monthlyTotalNumber.textContent = monthlyTotalSalary

}

// * Delete function that removes employee from DOM
function deleteHandler(event) {
    // totalAnnualSalary -= event.target.closest('tr')
    // let removalTr = event.target.closest('tr')
    console.log("Removal TR", removalTr);
    
    // event.target.closest('tr').remove()


}

/*
let totalAnnualSalary = 0

function submitHandler(event) {
    event.preventDefault()
    console.log("inside of submitHandler()")

    // ! Grab data from the input fields
    const firstName = document.getElementById("firstNameInput").value
    const lastName = document.getElementById("lastNameInput").value
    const id = document.getElementById("idInput").value
    const title = document.getElementById("titleInput").value
    const annualSalary = document.getElementById("annualSalaryInput").value

    // ! Add new employee annual salary to the totalAnnualSalary
    totalAnnualSalary += Number(annualSalary)
    console.log("Total Annual Salary:", totalAnnualSalary)

    // Create selector for employee data
    const employeeData = document.getElementById("employeeData")

    // ! Add new employee row at the end of the tbody
    employeeData.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>#${id}</td>
            <td>${title}</td>
            <td>$${annualSalary}</td>
            <td><button onClick="deleteHandler(event)">DELETE 🗑️</button></td>
        </tr>
    `

    // ! Calculate Total Monthly Salary
    const totalMonthlyNumber = document.getElementById("totalMonthlyNumber")
    const totalMonthlySalary = totalAnnualSalary / 12
    console.log("Total Monthly:", totalMonthlySalary)

    // ! Replaceing the total salary on the DOM with the updated number.
    totalMonthlyNumber.textContent = totalMonthlySalary

    // Select monthlyTotal
    let monthlyTotalFooter = document.getElementById("monthlyTotalFooter")
    
    console.log("MonthlyTotalFooter: ", monthlyTotalFooter)
    
    // ! If the total monthly is greater than 20,000 then make the background red
        // * Check the CSS file to understand what these classes represent
    console.log("totalMonthlyNumber: ", totalMonthlyNumber)

    if (Number(totalMonthlySalary) > 20000) {
        console.log("Total Monthly Above 20k")
        monthlyTotalFooter.classList.replace("basicTotalBG", "alertTotalBG")
    }
    
    // ! Clear the input fields.
    document.getElementById("firstNameInput").value = ''
    document.getElementById("lastNameInput").value = ''
    document.getElementById("idInput").value = ''
    document.getElementById("titleInput").value = ''
    document.getElementById("annualSalaryInput").value = ''
}


// Will handle deleting of rows on the employeeData table.
function deleteHandler(event) {
    // ! This will delete the closet <tr> parent node, which is the row that the button exists on for the employee.
    event.target.closest('tr').remove()
}

*/