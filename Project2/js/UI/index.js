// check add form modal status
let isOnForm = false;

function handleClickModal() {
    document.querySelector(".add-modal").style.display = 'flex';

}
function handleTurnOffModal() {
    const element = document.querySelector(".form-add-wrap");
    if (element.matches(":hover")) {
    } else {
        document.querySelector(".add-modal").style.display = 'none';
    }

}

(function main() {
    // add modal
    const addBtn = document.querySelector(".add-task-wrap");
    addBtn.addEventListener("click", handleClickModal);

    const addModal = document.querySelector(".add-modal");
    addModal.addEventListener("click", handleTurnOffModal);

    const formAdd = document.querySelector(".form-add");


})()