"use strict";

const table = document.querySelector(".table");
const form = document.querySelector(".form");
let count = 0;

const handleForm = function (event) {
  event.preventDefault();
  count++;

  const firstName = document.getElementById("validationCustom01").value;
  const lastName = document.getElementById("validationCustom02").value;
  const address = document.getElementById("validationCustomUsername").value;
  const date = document.getElementById("validationCustom03").value;
  const gender = document.getElementById("validationCustom04").value;
  const note = document.getElementById("validationCustom05").value;

  const row = table.insertRow(2);

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

};

form.addEventListener("submit", handleForm);

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