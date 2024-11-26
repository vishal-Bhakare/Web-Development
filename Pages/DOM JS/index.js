// Predefined registration data
const registrationData = {
    name: "Vishal",
    gender: "male",
    departments: ["Engineering", "HR"],
    salary: 50000,
};


window.onload = function () {

    document.getElementById("name").value = registrationData.name;

    const genderR = document.querySelector(`input[name="gender"][value = "${registrationData.gender}"]`).checked = true;;

    registrationData.departments.forEach(department => {

        const dep = document.querySelector(`input[name="department"][value="${department}"]`).checked = true;

        document.getElementById("salary").value = registrationData.salary;

    })

}

// Function to populate the form fields with predefined data
/* window.onload = function() {
    // Set Name
    document.getElementById("name").value = registrationData.name;

    // Set Gender
    const genderRadio = document.querySelector(`input[name="gender"][value="${registrationData.gender}"]`);
    if (genderRadio) {
        genderRadio.checked = true;
    }

    // Set Departments
    registrationData.departments.forEach(department => {
        const departmentCheckbox = document.querySelector(`input[name="department"][value="${department}"]`);
        if (departmentCheckbox) {
            departmentCheckbox.checked = true;
        }
    });

    // Set Salary
    document.getElementById("salary").value = registrationData.salary;
};

// Function to handle form submission and output data
function submitForm() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const departments = Array.from(document.querySelectorAll('input[name="department"]:checked')).map(checkbox => checkbox.value);
    const salary = document.getElementById("salary").value;

    // Create an output message with the form data
    const outputMessage = `
        <h2>Form Data Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Departments:</strong> ${departments.join(', ')}</p>
        <p><strong>Salary:</strong> $${salary}</p>
    `;

    // Display the output data
    document.getElementById("output").innerHTML = outputMessage;
}
 */

