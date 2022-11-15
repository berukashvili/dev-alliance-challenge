"use strict";

// DOM Elements
const form = document.querySelector(".form");
const table = document.getElementById("rows");
const submitBtn = document.querySelector(".submit-btn");
const tableList = document.querySelector(".list-body");
const remove = document.querySelector(".remove");

let dataArr = [];
let counter = 1;

//Show Entries
const showData = () => {
  table.innerHTML = "";
  if (localStorage.localData) {
    dataArr = JSON.parse(localStorage.localData);
    dataArr.forEach((item, index) => {
      addRow(
        index,
        item.count,
        item.firstName,
        item.lastName,
        item.address,
        item.date,
        item.gender,
        item.note
      );
    });
  }
};

const handleValues = (event) => {
  event.preventDefault();

  //Values
  const firstName = document.getElementById("validationCustom01").value;
  const lastName = document.getElementById("validationCustom02").value;
  const address = document.getElementById("validationCustomUsername").value;
  const date = document.getElementById("validationCustom03").value;
  const gender = document.getElementById("validationCustom04").value;
  const note = document.getElementById("validationCustom05").value;

  const dataObj = {
    count: counter++,
    firstName: firstName,
    lastName: lastName,
    address: address,
    date: date,
    gender: gender,
    note: note,
  };

  dataArr.push(dataObj);
  localStorage.localData = JSON.stringify(dataArr);
  showData();
};

//Add Row
const addRow = function (
  index,
  counter,
  firstName,
  lastName,
  address,
  date,
  gender,
  note
) {
  //Add Row Cells
  const row = table.insertRow();
  const countCell = row.insertCell(0);
  const firstNameCell = row.insertCell(1);
  const lastNameCell = row.insertCell(2);
  const addressCell = row.insertCell(3);
  const dateCell = row.insertCell(4);
  const genderCell = row.insertCell(5);
  const noteCell = row.insertCell(6);
  const actionCell = row.insertCell(7);

  //Set Values Of Cells
  countCell.innerHTML = counter;
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  addressCell.innerHTML = address;
  dateCell.innerHTML = date;
  genderCell.innerHTML = gender;
  noteCell.innerHTML = note;
  actionCell.innerHTML = `<button class="btn btn-primary remove-btn" onclick="removeRow(${index})">Remove</Button>`;
};

//Remove Row
function removeRow(index) {
  table.deleteRow(index);
  dataArr.splice(index, 1);
  localStorage.localData = JSON.stringify(dataArr);
  showData();
}

//Events

window.addEventListener("load", showData);

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
        } else if (form.checkValidity) {
          event.preventDefault();
          form.addEventListener("submit", handleValues);
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
