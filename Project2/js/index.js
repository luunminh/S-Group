import { handleCloseFormAdd, handleRenderItems, handleClickEditModal } from "./UI/index.js";
import { handleAddToDo } from "./addModal/index.js"
// function dung` chung


let globalData = [];
export const apiUrl = `https://63f5d2729daf59d1ad7bfa48.mockapi.io/luunminhSG/Project2/todo/`
export default function $(selector) {
    return document.querySelector(selector);
}




async function fetchData() {
    const { data } = await axios.get(apiUrl)
    return data;
}




// CRUD

//add
export const addNewItem = (item) => {
    axios
        .post(
            `${apiUrl}`,
            item
        )
        .then((res) => {
            if (res.status === 201) {
                item.id = (Number.parseInt(globalData[globalData.length - 1].id) + 1).toString()
                item.time = Date.now();
                item.isNewItem = true;
                globalData.push(item)
                console.log({ item, globalData });
                handleRenderItems(globalData)
                addEventDelete()
                addEventEdit();

                handleCloseFormAdd();
                return;
            }
        });
};


// edit

// delete 
export function deleteItem(e) {
    const delItem = e.target;
    console.log(delItem);
    delItem.id = (delItem.parentElement).parentElement.id;
    axios.delete(`https://63f5d2729daf59d1ad7bfa48.mockapi.io/luunminhSG/Project2/todo/${delItem.id}`)
        .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                globalData = globalData.filter(item => item.id !== delItem.id)
                handleRenderItems(globalData)
                addEventDelete()
                addEventEdit();

            }
        })
}
function addEventDelete() {
    const delBtns = document.querySelectorAll(".del-btn");
    // console.log(delBtns);
    delBtns.forEach(elm => {
        elm.addEventListener("click", deleteItem)
    })
}

function addEventEdit() {
    const editBtns = document.querySelectorAll(".edit-btn");
    // console.log(editBtns);
    editBtns.forEach(elm => {
        elm.addEventListener("click", handleClickEditModal)
    })
}



(async function main() {
    if (globalData.length < 1) {
        const data = await fetchData();
        globalData = data;
    }
    // console.log(globalData); 
    handleRenderItems(globalData)



    const addForm = $(".form-add")
    addForm.addEventListener("submit", handleAddToDo)

    addEventDelete();
    addEventEdit();

})()



