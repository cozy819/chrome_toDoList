const inputForm = document.querySelector(".inputForm");
const inputElement = inputForm.querySelector("input");

const pending__list = document.querySelector(".pending__list");
const finished__list = document.querySelector(".finished__list");

const PENDING_LS = "pending_ls";
const FINISHED_LS = "finished_ls";

let pendingList = [];
let finishedList = [];

// loading
function loadTask() {
  const loadedPendingList = localStorage.getItem(PENDING_LS);
  if (loadedPendingList !== null) {
    const parsedPendingList = JSON.parse(loadedPendingList);
    parsedPendingList.forEach(function (taskP) {
      paintToPendingList(taskP);
    });
  }

  const loadedFinishedList = localStorage.getItem(FINISHED_LS);
  if (loadedFinishedList !== null) {
    const parsedFinishedList = JSON.parse(loadedFinishedList);
    parsedFinishedList.forEach(function (taskF) {
      paintToFinishedList(taskF);
    });
  }
}

function paintToPendingList(task) {
  const li = document.createElement("li");

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTaskP);

  const finBtn = document.createElement("button");
  finBtn.innerText = "✅";
  finBtn.addEventListener("click", finishTask);

  const span1 = document.createElement("span");
  span1.innerText = task.text;

  const span2 = document.createElement("span");
  span2.innerText = task.id;
  span2.classList.add("hidden");

  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(delBtn);
  li.appendChild(finBtn);

  pending__list.appendChild(li);
}

function paintToFinishedList(task) {
  const li = document.createElement("li");

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTaskF);

  const penBtn = document.createElement("button");
  penBtn.innerText = "⏪";
  penBtn.addEventListener("click", pendingTask);

  const span1 = document.createElement("span");
  span1.innerText = task.text;

  const span2 = document.createElement("span");
  span2.innerText = task.id;
  span2.classList.add("hidden");

  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(delBtn);
  li.appendChild(penBtn);

  finished__list.appendChild(li);
}

// Button Event
function deleteTaskP(event) {
  const btn = event.target;
  const li = btn.parentNode;

  const cleanPendingList = pendingList.filter(function (item) {
    return item.id !== parseInt(li.querySelectorAll("span")[1].innerText);
  });
  pendingList = cleanPendingList;
  saveToPL();
  pending__list.removeChild(li);
}

function deleteTaskF(event) {
  const btn = event.target;
  const li = btn.parentNode;

  const cleanFinishedList = finishedList.filter(function (item) {
    return item.id !== parseInt(li.querySelectorAll("span")[1].innerText);
  });
  finishedList = cleanFinishedList;
  saveToFL();
  finished__list.removeChild(li);
}

function finishTask(event) {
  const btn = event.target;
  const li = btn.parentNode;

  const finishedObj = {
    text: li.querySelectorAll("span")[0].innerText,
    id: parseInt(li.querySelectorAll("span")[1].innerText),
  };
  paintToFinishedList(finishedObj);

  finishedList.push(finishedObj);
  saveToFL();

  const cleanPendingList = pendingList.filter(function (item) {
    return item.id !== parseInt(li.querySelectorAll("span")[1].innerText);
  });
  pendingList = cleanPendingList;
  saveToPL();
  pending__list.removeChild(li);
}

function pendingTask(event) {
  const btn = event.target;
  const li = btn.parentNode;

  const pendingObj = {
    text: li.querySelectorAll("span")[0].innerText,
    id: parseInt(li.querySelectorAll("span")[1].innerText),
  };
  paintToPendingList(pendingObj);

  pendingList.push(pendingObj);
  saveToPL();

  const cleanFinishedList = finishedList.filter(function (item) {
    return item.id !== parseInt(li.querySelectorAll("span")[1].innerText);
  });
  finishedList = cleanFinishedList;
  saveToFL();
  finished__list.removeChild(li);
}

// save to localStorage
function saveToPL() {
  localStorage.removeItem(PENDING_LS);
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingList));
}

function saveToFL() {
  localStorage.removeItem(FINISHED_LS);
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedList));
}

// add to List
function handleSubmit(event) {
  event.preventDefault();
  const inputValue = inputElement.value;
  inputElement.value = "";
  addToPendingList(inputValue);
}

function addToPendingList(taskInput) {
  const newId = Date.now();

  const pendingObj = {
    id: newId,
    text: taskInput,
  };

  paintToPendingList(pendingObj);

  pendingList.push(pendingObj);
  saveToPL();
}

// init
function init() {
  loadTask();
  inputForm.addEventListener("submit", handleSubmit);
}

init();
