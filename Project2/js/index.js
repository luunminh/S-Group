import { handleCloseFormAdd, handleRenderItems, handleClickEditModal, handleCloseFormEdit, showLoading, hideLoading } from "./UI/index.js";
import { handleAddToDo, handleEditToDo } from "./addModal/index.js"
import { handleDragEvent } from "./Drag/index.js";
// function dung` chung


let globalData = [];
let editId;
export const apiUrl = `https://63f5d2729daf59d1ad7bfa48.mockapi.io/luunminhSG/Project2/todo/`
export default function $(selector) {
    return document.querySelector(selector);
}




async function fetchData() {
    const { data } = await axios.get(apiUrl)
    return data;
}

// fill data into edit form
export function renderDataEditForm(id) {
    try {
        const { category, status, content, title } = globalData.find(elm => elm.id === id)
        $(".form-edit").id = id;
        const textInputs = $(".form-edit").querySelectorAll(".input-tag")
        const radioInputs = $(".form-edit").querySelectorAll(".radio-btn");
        textInputs[0].value = category;
        textInputs[1].value = title;
        textInputs[2].value = content;
        if (status === "todo") {
            radioInputs[0].checked = true
        }
        if (status === "doing") {
            radioInputs[1].checked = true
        }
        if (status === "finished") {
            radioInputs[2].checked = true
        }
    } catch (e) {
        console.log(e);
    }

}




// CRUD


// search 
export function getElmById(id) {
    return globalData.find(elm => elm.id === id)
}

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
                // console.log({ item, globalData });
                handleRenderItems(globalData)
                addEventDelete()
                addEventEdit();
                handleCloseFormAdd();
                handleDragEvent();
                return;
            }
        });
};




// edit
export function editItem(category, title, content, status, id) {
    // console.log("id,", id);
    if (!id) {
        id = $(".form-edit").id
    }
    // console.log("id", id);
    const item = globalData.find(elm => elm.id === id);
    axios
        .put(
            `${apiUrl}/${id}`,
            {
                category: category,
                content: content,
                title: title,
                status: status,
                time: item.time
            }
        )
        .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                globalData = globalData.map((item) => {
                    if (item.id === id) {
                        item.category = category
                        item.content = content
                        item.title = title
                        item.status = status
                    }
                    return item;
                })
                // console.log({ globalData });
                handleRenderItems(globalData)
                addEventDelete()
                addEventEdit();
                handleCloseFormEdit()
                handleDragEvent();
                return true;
            }
        })
        .catch(error => {
            alert("error")
            return false;
        });
}


// delete 
export function deleteItem(e) {
    const delItem = e.target;
    // console.log(delItem);
    delItem.id = (delItem.parentElement).parentElement.id;
    axios.delete(`${apiUrl}/${delItem.id}`)
        .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                globalData = globalData.filter(item => item.id !== delItem.id)
                handleRenderItems(globalData)
                addEventDelete()
                addEventEdit();
                handleDragEvent();
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
        showLoading()
        const data = await fetchData();
        globalData = data;
        hideLoading();
    }
    // console.log(globalData); 
    handleRenderItems(globalData)



    const addForm = $(".form-add")
    addForm.addEventListener("submit", handleAddToDo)

    const editForm = $(".form-edit")
    editForm.addEventListener("submit", handleEditToDo)

    addEventDelete();
    addEventEdit();
    handleDragEvent();

})()



