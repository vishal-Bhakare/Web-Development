// Add event listener to the registration form

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    if (form) {
      form.addEventListener("submit", handleFormSubmit);
    } else {
      renderUsers();
    }
  });
  
  // Handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    const country = document.getElementById("country").value;
  
    const user = { name, email, dob, phone, gender, skills, country };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("User registered successfully!");
    document.getElementById("registrationForm").reset();
  }
  
  // Render users in the table
  function renderUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
  
    users.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.dob}</td>
        <td>${user.phone}</td>
        <td>${user.gender}</td>
        <td>${user.skills.join(", ")}</td>
        <td>${user.country}</td>
        <td><button class="delete" onclick="deleteUser(${index})">Delete</button></td>
      `;
      userList.appendChild(row);
    });
  }
  
  // Delete user from the list
  function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();
  }
  