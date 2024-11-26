
document.addEventListener("DOMContentLoaded", () => {
    const registrationFrom = document.getElementById("registrationForm");
    const userTable = document.querySelector("#userTable tbody");


    function getUsers() {
        return JSON.parse(localStorage.getItem("users")) || [];
    }

    function setUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    function renderUsers() {
        console.log("Hello i am render");
        const users = getUsers();
        userTable.innerHTML = "";
        users.forEach((user, index) => {
            const row = `
    <tr>
           <td>${user.name}</td>
           <td>${user.email}</td>
           <td>${user.dob}</td>
           <td>${user.gender}</td>
           <td>${user.skills.join(", ")}</td>
           <td>${user.country}</td>
           <td>
           <button  onClick = "editUser(${index})">Edit</button>
          <button  onClick = "deleteUser(${index})">Delete</button>
           </td>
    </tr> 
    `;
            userTable.innerHTML += row;
        });
    }

    registrationFrom.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name = "gender"]:checked').value;
        const skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((c) => c.value);
        const country = document.getElementById("country").value;

        const users = getUsers();

        users.push({ name, email, dob, gender, skills, country });
        console.log("user set sucessfully");
        setUsers(users);
        console.log("user render sucessfully");
        renderUsers();
        console.log("user rendered sucessfully");
        registrationFrom.reset();
    });

    window.editUser = (index) => {
        const users = getUsers();
        const user = users[index];
    
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("dob").value = user.dob;
        document.querySelector(`input[name="gender"][value="${user.gender}"]`).checked = true;
    
        Array.from(document.querySelectorAll('input[type="checkbox"]')).forEach((checkbox) => {
          checkbox.checked = user.skills.includes(checkbox.value);
        });
    
        document.getElementById("country").value = user.country;
    
        users.splice(index, 1);
        setUsers(users);
        renderUsers();
      };
    
      window.deleteUser = (index) => {
        const users = getUsers();
        users.splice(index, 1);
        setUsers(users);
        renderUsers();
      };
    
      renderUsers();


});