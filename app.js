"use strict";

// DOM Elements
const form = document.querySelector(".form");
const table = document.querySelector(".table");
const submitBtn = document.querySelector(".submit-btn");
const tableList = document.querySelector(".list-body");
const remove = document.querySelector(".remove");

let dataArr = [];
let count = 0;

const localInit = function () {
  if (localStorage.localData) {
    dataArr = JSON.parse(localStorage.localData);
    for (let i = 0; i < dataArr.length; i++) {
      makeRow(
        i,
        dataArr[i].count,
        dataArr[i].firstName,
        dataArr[i].lastName,
        dataArr[i].address,
        dataArr[i].date,
        dataArr[i].gender,
        dataArr[i].note
      );
    }
  }
};

const handleInput = function (event) {
  event.preventDefault();

  const rowCount = count;
  const firstName = document.getElementById("validationCustom01").value;
  const lastName = document.getElementById("validationCustom02").value;
  const address = document.getElementById("validationCustomUsername").value;
  const date = document.getElementById("validationCustom03").value;
  const gender = document.getElementById("validationCustom04").value;
  const note = document.getElementById("validationCustom05").value;

  const dataObj = {
    count: count,
    firstName: firstName,
    lastName: lastName,
    address: address,
    date: date,
    gender: gender,
    note: note,
  };

  dataArr.push(dataObj);

  localStorage.localData = JSON.stringify(dataArr);

  makeRow(i, count, firstName, lastName, address, date, gender, note);

  // document.getElementById("validationCustom01").value = "";
  // document.getElementById("validationCustom02").value = "";
  // document.getElementById("validationCustomUsername").value = "";
  // document.getElementById("validationCustom03").value = "";
  // document.getElementById("validationCustom04").value = "";
  // document.getElementById("validationCustom05").value = "";
};

const makeRow = (
  index,
  count,
  firstName,
  lastName,
  address,
  date,
  gender,
  note
) => {
  const row = table.insertRow();

  const countCell = row.insertCell(0);
  countCell.innerHTML = count;

  const firstNameCell = row.insertCell(1);
  firstNameCell.innerHTML = firstName;

  const lastNameCell = row.insertCell(2);
  lastNameCell.innerHTML = lastName;

  const addressCell = row.insertCell(3);
  addressCell.innerHTML = address;

  const dateCell = row.insertCell(4);
  dateCell.innerHTML = date;

  const genderCell = row.insertCell(5);
  genderCell.innerHTML = gender;

  const noteCell = row.insertCell(6);
  noteCell.innerHTML = note;

  const removeCell = row.insertCell(7);
  removeCell.innerHTML =
    '<button class="btn btn-primary remove-btn">Remove</Button>';
};

const removeRow = function (index) {
  table.deleteRow(index);
};

// (
//   // Validation
//   () => {
//     const forms = document.querySelectorAll(".needs-validation");

//     Array.from(forms).forEach((form) => {
//       form.addEventListener(
//         "submit",
//         (event) => {
//           if (!form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//           }

//           form.classList.add("was-validated");
//         },
//         false
//       );
//     });
//   }
// )();

form.addEventListener("submit", handleInput);

const submitData = [];
