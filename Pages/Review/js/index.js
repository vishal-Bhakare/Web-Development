
let data = JSON.parse(localStorage.getItem('curdData')) || [];

function addData() {

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : null;
    const phone = document.getElementById("phone").value;


    if (!gender) {
        alert("Please select a gender.");
        return;
    }
    data.push({ name, address, gender, phone });
    saveToLocalStorage();
    renderTable();
    document.getElementById("curdForm").reset();
}

function saveToLocalStorage() {
    localStorage.setItem('curdData', JSON.stringify(data));
}


function renderTable() {
    const dataTable = document.getElementById("dataTable");
    dataTable.innerHTML = "";
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.address}</td>
          <td>${item.gender}</td>
          <td>${item.phone}</td>
        `;

        dataTable.appendChild(row);
    });
}
