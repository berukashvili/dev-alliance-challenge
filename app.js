"use strict";

// DOM Elements
const table = document.querySelector(".table");
const form = document.querySelector(".form");
const tableList = document.querySelector(".list-body");
const remove = document.querySelector(".remove");

let count = 0;

const handleForm = function (event) {
  // Values
  const firstName = document.getElementById("validationCustom01").value;
  const lastName = document.getElementById("validationCustom02").value;
  const address = document.getElementById("validationCustomUsername").value;
  const date = document.getElementById("validationCustom03").value;
  const gender = document.getElementById("validationCustom04").value;
  const note = document.getElementById("validationCustom05").value;

  event.preventDefault();
  count++;

  // Add Remove Button
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";
  removeBtn.setAttribute("class", "btn btn-primary");
  remove.appendChild(removeBtn);

  //Insert Data
  const row = table.insertRow(2);

  const countCell = row.insertCell(0);
  countCell.innerHTML = count;

  const removeCurrent = () => {
    const rowId = parseInt(countCell.innerHTML, 10);
    if (rowId === count) {
      tableList.deleteRow(rowId);
    }
  };

  removeBtn.addEventListener("click", removeCurrent);

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
  removeCell.appendChild(removeBtn);
};

form.addEventListener("submit", handleForm);

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
