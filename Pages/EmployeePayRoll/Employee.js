
// Global Variables
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Save employees to localStorage
function saveEmployeesToStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

// Form Validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const profile = document.querySelector('input[name="profile"]:checked');
    const salary = document.getElementById("salary").value.trim();
    const departments = Array.from(document.querySelectorAll('input[name="department"]:checked'));
    const day = document.querySelector('select[name="start_day"]').value;
    const month = document.querySelector('select[name="start_month"]').value;
    const year = document.querySelector('select[name="start_year"]').value;

    if (!name) {
        alert("Name is required.");
        return false;
    }
    if (!gender) {
        alert("Gender is required.");
        return false;
    }
    if (!profile) {
        alert("Profile selection is required.");
        return false;
    }
    if (!departments.length) {
        alert("At least one department must be selected.");
        return false;
    }
    if (!salary) {
        alert("Salary is required.");
        return false;
    }
    if (!day || !month || !year) {
        alert("Complete start date is required.");
        return false;
    }
    return true;
}

// Add Employee
function addEmployee() {
    if (!validateForm()) return;
    const employee = getEmployeeFormData();
    employees.push(employee);
    window.location.href = "EmployeeDeatils.html";
    saveEmployeesToStorage();
    alert("Employee added successfully!");
    resetForm();

}

// Get Employee Form Data
function getEmployeeFormData() {
    const name = document.getElementById("name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profile = document.querySelector('input[name="profile"]:checked').id;
    const departments = Array.from(document.querySelectorAll('input[name="department"]:checked')).map(
        (checkbox) => checkbox.value
    );
    const salary = document.getElementById("salary").value.trim();
    const day = document.querySelector('select[name="start_day"]').value;
    const month = document.querySelector('select[name="start_month"]').value;
    const year = document.querySelector('select[name="start_year"]').value;
    const startDate = `${day} ${month} ${year}`;
    const notes = document.getElementById("notes").value.trim();

    return { name, gender, profile, departments, salary, startDate, notes };
}

// Display Employees in the Table
function displayEmployees() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Clear table rows

    employees.forEach((employee, index) => {
        const row = `
             <tr>
                 <td>${employee.name}</td>
                 <td>${employee.gender}</td>
                 <td>${employee.departments.join(", ")}</td>
                 <td>${employee.salary}</td>
                 <td>${employee.startDate}</td>
                 <td>
                     <button onclick="editEmployee(${index})"><i class='fas fa-pen' style='font-size:20px'></i></button>
                     <button onclick="deleteEmployee(${index})"><i class='far fa-trash-alt' style='font-size:20px'></i></button>
                 </td>
             </tr>`;
        tableBody.innerHTML += row;
    });
}

// Edit Employee
function editEmployee(index) {
    const employee = employees[index];
    localStorage.setItem("editIndex", index);
    localStorage.setItem("editEmployee", JSON.stringify(employee));

    window.location.href = "EmployeePayRoll.html";
}

// Prefill Form for Editing
function prefillEditForm() {
    const employee = JSON.parse(localStorage.getItem("editEmployee"));
    if (!employee) return;

    document.getElementById("name").value = employee.name;
    document.querySelector(`input[id="${employee.profile}"]`).checked = true;
    document.querySelector(`input[value="${employee.gender}"]`).checked = true;

    employee.departments.forEach((dept) => {
        document.querySelector(`input[value="${dept}"]`).checked = true;
    });

    document.getElementById("salary").value = employee.salary;

    const [day, month, year] = employee.startDate.split(" ");
    document.querySelector('select[name="start_day"]').value = day;
    document.querySelector('select[name="start_month"]').value = month;
    document.querySelector('select[name="start_year"]').value = year;

    document.getElementById("notes").value = employee.notes;

    // Update Submit Button
    document.getElementById("submitButton").onclick = function () {
        updateEmployee(localStorage.getItem("editIndex"));
    };
}

// Update Employee
function updateEmployee(index) {
    if (!validateForm()) return;

    const updatedEmployee = getEmployeeFormData();

        employees[index] = updatedEmployee;
        saveEmployeesToStorage();
        alert("Employee updated successfully!");
        localStorage.removeItem("editIndex");
        localStorage.removeItem("editEmployee");
        window.location.href = "EmployeeDeatils.html";
    
}

// Delete Employee
function deleteEmployee(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employees.splice(index, 1);
        saveEmployeesToStorage();
        displayEmployees();
    }
}

// Reset Form
function resetForm() {
    document.querySelector(".form").reset();
}

// Initialize Employee Details Page
if (document.getElementById("table-body")) {
    displayEmployees();
}

// Initialize Employee Payroll Page for Editing
if (document.getElementById("name")) {
    prefillEditForm();
}

function handleSubmit() {
    const editIndex = localStorage.getItem("editIndex");
    if (editIndex === null) {
        addEmployee();
    } else {
        updateEmployee(editIndex);
    }
}

