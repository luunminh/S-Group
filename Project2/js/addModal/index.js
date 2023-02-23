import $ from "../index.js";
import { apiUrl, addNewItem } from "../index.js";
export function handleCheckValidInput(e) {
    // console.log(e.target.value);

    if (e.target.value.trim() === "" || e.target.value === null) {
        e.target.classList.remove('valid-input')
        e.target.classList.add('invalid-input')
    } else {
        e.target.classList.add('valid-input')
        e.target.classList.remove('invalid-input')
    }
}

export function isValidInput(selector) {
    if (selector.value.trim() === "" || selector.value === null) {
        selector.classList.remove('valid-input')
        selector.classList.add('invalid-input')
        return false
    } else {
        selector.classList.add('valid-input')
        selector.classList.remove('invalid-input')
        return true;
    }
}

export function cleanInput() {
    const inputTags = document.querySelectorAll(".input-tag");
    inputTags.forEach((elm) => {
        elm.value = "";
        elm.classList.remove("valid-input")
        elm.classList.remove("invalid-input")
    })
}



export function handleAddToDo(e) {
    e.preventDefault();
    let isValid = true;
    const addForm = $(".form-add")
    const inputs = addForm.querySelectorAll(".input-tag")
    for (const input of inputs) {
        if (!isValidInput(input)) {
            isValid = false
        }
    }
    if (isValid) {
        let item = {

            category: inputs[0].value,
            title: inputs[1].value,
            content: inputs[2].value,
            status: "todo",
            // time: times
        }
        console.log({ item });
        addNewItem(item);
    }

}




(function main() {
    const inputTags = document.querySelectorAll(".input-tag");
    inputTags.forEach((elm) => {
        elm.addEventListener("focus", handleCheckValidInput);
    })
    inputTags.forEach((elm) => {
        elm.addEventListener("change", handleCheckValidInput);
    })



})()