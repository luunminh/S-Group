import $, { deleteItem } from '../index.js'
// UI event handle and function renderUI 
import { cleanInput } from '../addModal/index.js';


// render items UI 
export function showItems(items) {
    let listRender;
    let numberRender;

    if (items[0].status === "todo") {
        listRender = 'todo-wrap'
        numberRender = 'total-todo-status'
    } else if (items[0].status === "doing") {
        listRender = 'doing-wrap'
        numberRender = 'total-doing-status'
    } else {
        listRender = 'finished-wrap'
        numberRender = 'total-finished-status'
    }
    const ulTags = $(`.${listRender}`);
    ulTags.innerHTML = "";
    const totalTag = $(`.${numberRender}`);
    totalTag.innerHTML = `${items.length}`

    items.map((item) => {
        ulTags.appendChild(renderItems(item));
    })
}

export function renderItems(item) {
    const li = document.createElement('li');
    li.className = 'content-item';
    // li.id = `${item.id}`;
    let date;
    if (item.hasOwnProperty('isNewItem')) {
        date = new Date(item.time)

    } else {
        date = new Date(item.time * 1000)
    }
    date = date.toDateString();
    li.innerHTML = `
    <div class="content-wrap">
        <div class="content-title-wrap">
            <div class="content-categories">
                ${item.category}
            </div>
            <div class="content-title">
                ${item.title}
            </div>
        </div>
        <div class="content-btn" id="${item.id}">
            <div class="edit-btn btn">
                <img src="./assets/icon/Iconly/Light/Edit.svg" alt="">
            </div>
            <div class="del-btn btn" >
                <img src="./assets/icon/bin/Delete.svg" alt="">
            </div>
        </div>
    </div>
    <p class="content-desc">
        ${item.content}
    </p>
    <div class="content-time">
        <iconify-icon icon="ic:sharp-access-time" class="time"></iconify-icon>
        <span>${date}</span>
    </div>
    `

    return li;
}

export function handleRenderItems(arr) {
    const [todoItems, doingItems, finishedItems] = filteredItems(arr);
    showItems(todoItems)
    showItems(doingItems)
    showItems(finishedItems)
}

export function filteredItems(data) {
    const todoItems = data.filter((item) => item.status === "todo")
    const doingItems = data.filter((item) => item.status === "doing")
    const finishedItems = data.filter((item) => item.status === "finished")
    // console.log({ todoItems, doingItems, finishedItems });

    return [todoItems, doingItems, finishedItems]
}


// check add form modal status
let isOnForm = false;

export function handleClickModal() {
    document.querySelector(".add-modal").style.display = 'flex';
}

export function handleClickEditModal() {
    document.querySelector(".edit-modal").style.display = 'flex';
}

function handleTurnOffModal() {
    const element = document.querySelector(".form-add-wrap");
    if (element.matches(":hover")) {
    } else {
        cleanInput();
        handleCloseFormAdd();
    }

}

function handleTurnOffEditModal() {
    const element = document.querySelector(".form-edit-wrap");
    if (element.matches(":hover")) {
    } else {
        cleanInput();
        handleCloseFormEdit();
    }

}



export function handleCloseFormAdd() {
    cleanInput();
    document.querySelector(".add-modal").style.display = "none";
}

export function handleCloseFormEdit() {
    cleanInput();
    document.querySelector(".edit-modal").style.display = "none";
}


function handleTabToDoList() {
    if (document.body.offsetWidth < 1200) {
        const todoList = $(".todo-wrap");
        if (todoList.clientHeight === 0) {
            todoList.style.height = "auto"
            $(".todo-status").classList.remove("invalid")


        } else {
            todoList.style.height = 0;
            $(".todo-status").classList.add("invalid")

        }
    }

}

function handleTabDoingList() {
    if (document.body.offsetWidth < 1200) {
        const doingList = $(".doing-wrap");
        if (doingList.clientHeight === 0) {
            doingList.style.height = "auto"
            $(".doing-status").classList.remove("invalid")

        } else {
            doingList.style.height = 0
            $(".doing-status").classList.add("invalid")
        }
    }

}

function handleTabFinishedList() {
    if (document.body.offsetWidth < 1200) {
        const finishedList = $(".finished-wrap");
        if (finishedList.clientHeight === 0) {
            finishedList.style.height = "auto"
            $(".finished-status").classList.remove("invalid")

        } else {
            finishedList.style.height = 0
            $(".finished-status").classList.add("invalid")

        }
    }

}



(function main() {
    // add modal
    const addBtn = document.querySelector(".add-task-wrap");
    addBtn.addEventListener("click", handleClickModal);

    const addModal = document.querySelector(".add-modal");
    addModal.addEventListener("click", handleTurnOffModal);

    const formAdd = document.querySelector(".form-add");

    // close form add
    const closeFormAddBtn = document.querySelector('.close-modal');
    closeFormAddBtn.addEventListener("click", handleCloseFormAdd)



    // edit modal
    // editBtn.addEventListener("click", handleClickEditModal);

    const editModal = document.querySelector(".edit-modal");
    editModal.addEventListener("click", handleTurnOffEditModal);

    const formedit = document.querySelector(".form-edit");

    // close form edit
    const closeFormeditBtns = document.querySelectorAll('.close-modal');
    // console.log(closeFormeditBtns);
    closeFormeditBtns[1].addEventListener("click", handleCloseFormEdit)


    // close tab mobile
    const todoTab = $(".todo-status");
    todoTab.addEventListener("click", handleTabToDoList);
    const doingTab = $(".doing-status");
    doingTab.addEventListener("click", handleTabDoingList);
    const finishedTab = $(".finished-status");
    finishedTab.addEventListener("click", handleTabFinishedList);

})()