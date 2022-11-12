"use strict";

// DOM Elements
const table = document.querySelector(".table");
const form = document.querySelector(".form");
const tableBody = document.querySelector(".list-body");
const rowBody = document.querySelector(".thread");
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

  for (let i = 0; i < dataArr.length; i++) {
    localStorage.setItem(`${i}`, JSON.stringify(dataArr[i]));
  }
  showData();
};

// Parse And Add Local data Into Array
const getData = () => {};

// Maintain and Show Entered Data
const showData = () => {
  getData();

  let num = table.rows.length;
  while (--num) {
    table.deleteRow(num);
  }

  for (let i = 0; i < localStorage.length; i++) {
    const localItem = JSON.parse(localStorage.getItem(`${i}`));
    if (localItem != null) {
      const row = table.insertRow(1);

      const countCell = row.insertCell(0);
      countCell.innerHTML = localItem.count;

      const firstNameCell = row.insertCell(1);
      firstNameCell.innerHTML = localItem.firstName;

      const lastNameCell = row.insertCell(2);
      lastNameCell.innerHTML = localItem.lastName;

      const addressCell = row.insertCell(3);
      addressCell.innerHTML = localItem.address;

      const dateCell = row.insertCell(4);
      dateCell.innerHTML = localItem.date;

      const genderCell = row.insertCell(5);
      genderCell.innerHTML = localItem.gender;

      const noteCell = row.insertCell(6);
      noteCell.innerHTML = localItem.note;

      //Create and Append Remove Button
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = "X";
      removeBtn.classList.add("btn", "btn-primary");
      remove.appendChild(removeBtn);

      //Remove Item
      const removeRow = () => {
        localStorage.removeItem(`${i}`);
        showData();
      };

      const removeCell = row.insertCell(7);
      removeCell.appendChild(removeBtn);

      removeBtn.addEventListener("click", removeRow);
    }
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
