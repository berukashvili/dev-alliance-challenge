"use strict";

// DOM Elements
const table = document.querySelector(".table");
const form = document.querySelector(".form");
const tableList = document.querySelector(".list-body");
const remove = document.querySelector(".remove");

let dataArr = [];
let count = 0;

// Add Form Data to Local Storage
const addData = (event) => {
  event.preventDefault();
  count++;
  getData();

  dataArr.push({
    count: count,
    firstName: document.getElementById("validationCustom01").value,
    lastName: document.getElementById("validationCustom02").value,
    address: document.getElementById("validationCustomUsername").value,
    date: document.getElementById("validationCustom03").value,
    gender: document.getElementById("validationCustom04").value,
    note: document.getElementById("validationCustom05").value,
  });
  localStorage.setItem("localRow", JSON.stringify(dataArr));
  showData();
};

// Parse And Add Local data to Array
const getData = () => {
  const rowData = localStorage.getItem("localRow");
  if (rowData != null) {
    dataArr = JSON.parse(rowData);
  }
};

// Maintain and Show Entered Data
const showData = () => {
  getData();

  var num = table.rows.length;
  while (--num) {
    table.deleteRow(num);
  }

  for (let i = 0; i < dataArr.length; i++) {
    const row = table.insertRow(1);

    const countCell = row.insertCell(0);
    countCell.innerHTML = dataArr[i].count;

    const firstNameCell = row.insertCell(1);
    firstNameCell.innerHTML = dataArr[i].firstName;

    const lastNameCell = row.insertCell(2);
    lastNameCell.innerHTML = dataArr[i].lastName;

    const addressCell = row.insertCell(3);
    addressCell.innerHTML = dataArr[i].address;

    const dateCell = row.insertCell(4);
    dateCell.innerHTML = dataArr[i].date;

    const genderCell = row.insertCell(5);
    genderCell.innerHTML = dataArr[i].gender;

    const noteCell = row.insertCell(6);
    noteCell.innerHTML = dataArr[i].note;

    //Create and Append Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "X";
    removeBtn.setAttribute("class", "btn btn-primary");
    remove.appendChild(removeBtn);

    const removeCell = row.insertCell(7);
    removeCell.appendChild(removeBtn);

    const removeItem = () => {
      console.log("delete");
    };

    removeBtn.addEventListener("click", removeItem);
  }
};

window.addEventListener("load", showData);

form.addEventListener("submit", addData);

// Validation
(() => {
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const submitData = [];
