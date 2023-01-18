// const axios = require("axios");



function $(selector) {
    return document.querySelector(selector);
}

function showLoading() {
    $('.loading').style.display = 'flex'
}

function hideLoading() {
    $('.loading').style.display = 'none'
}

const fetchData = (status = "all") => {
    axios
        .get("https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo")
        .then((Response) => {
            return Response.data;
        })
        .then((res) => {
            // console.log(res);
            main(res, status);
        })
        .catch((error) => {
            console.log("error");
        });
};

const li_Items = (item) => {
    const checkStatus = item.status === "completed" ? "checked" : "";
    const li = document.createElement("li");
    li.className = "content-item";
    li.innerHTML = `
        <input type="checkbox" value=${item.id} ${checkStatus} class="checkbox-item">
        <div class="check-box-custom"></div>
        <span class="span-text">${item.job}</span> 
        <div class="delete-group">
            <input type="checkbox" class="checkbox-delete" value=${item.id}>
            <span>x</span>
        </div>
        <input type="text" id="${item.id}-${item.status}" class="edit-input" />
    `;
    return li;
};

const filteredItems = (arr) => {
    const activeItems = arr.filter((item) => item.status === "active");
    const completedItems = arr.filter((item) => item.status === "completed");

    return [activeItems, completedItems];
};

const showAllItems = (arr, showAllCheck) => {
    const ul_tag = $(".content-list");
    ul_tag.innerHTML = "";
    const totalTag = $(".item-left");
    arr.map((item) => {
        ul_tag.appendChild(li_Items(item));
    });
    if (showAllCheck) {
        const [activeItems, completedItems] = filteredItems(arr);
        totalTag.innerText = `${activeItems.length} còn lại`;
        $(".checkbox-status").checked = true;
    }
    handleChangeStatus(arr);
    handleUpdate();
    handleDeleteItem();

};

//add
const addNewItem = (item) => {
    showLoading();
    axios
        .post(
            `https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo`,
            item
        )
        .then((res) => {
            if (res.status === 201) {
                fetchData(check);
                return;
            }
        });
};

//add event
$(".input-todo").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const newItem = {
            job: $(".input-todo").value,
            status: "active",
        };
        addNewItem(newItem);
        $(".input-todo").value = "";
    }
});

// change status event
const handleChangeStatus = (arr) => {
    const checkBoxGroup = document.querySelectorAll(".checkbox-item");
    checkBoxGroup.forEach((item) => {
        const isComplete = item.checked;
        const itemId = item.value;
        item.addEventListener(
            "click",
            (isComplete = item.checked, itemId = item.value) => {
                const newTtem = arr.find((item) => item.id == itemId);
                if (item.checked) {
                    console.log("checked");
                    changeStatusItem(itemId, newTtem.job, "completed");
                } else if (!item.checked) {
                    console.log("unchecked");
                    changeStatusItem(itemId, newTtem.job, "active");
                }
            }
        );
    });
};

const changeStatusItem = (id, job, status) => {
    const updateItem = {
        job: job,
        status: status,
        // id: id,
    };
    console.log(updateItem);
    showLoading();
    axios
        .put(
            `https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo/${id}`,
            updateItem
        )
        .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                fetchData(check);
            }
        });
};


// handle update event 
const handleUpdate = () => {
    const items = document.querySelectorAll('.content-item');
    items.forEach((item) => {
        item.addEventListener('dblclick',() => {
            item.querySelector('.edit-input').style.display = "block";
            item.querySelector('.edit-input').value = item.querySelector(".span-text").innerText;
            const itemInfo = (item.querySelector(".edit-input").id).split("-");
            console.log(itemInfo);
            item.querySelector('.edit-input').addEventListener("keypress",(e) => {
                if(e.key === "Enter") {
                    updateItem(itemInfo[0], item.querySelector('.edit-input').value, itemInfo[1]);
                    item.querySelector('.edit-input').style.display = "none";
                }

            })
        })
    })
}
const updateItem = (itemId,job,status) => {
    showLoading();
    axios
        .put(
            `https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo/${itemId}`,
            {
                job: job,
                status: status,
            }
        )
        .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                fetchData(check);
            }
        })
        .catch(error => {
            alert("error")
        }) ;
}

// handle delete event 
const handleDeleteItem = () => {
    const checkBoxDeleteGroup = document.querySelectorAll(".checkbox-delete");
    checkBoxDeleteGroup.forEach((item) => {
        item.addEventListener("click", () => {
            if(item.checked) {
                deleteItem(item.value);
            }
        })
    })
} 

const deleteItem = (itemId) => {
    console.log(itemId);
    showLoading();
    axios.delete(`https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo/${itemId}`)
    .then((res) => {
        console.log(res.status);
        if(res.status === 200) {
            fetchData(check);
        }
    })
} 



let check = "all";

const main = (res, status) => {
    try {
        showLoading();
        const arr = res;
        const [activeItems, completedItems] = filteredItems(arr);
        if (status === "all") {
            showAllItems(arr, true);
        } else if (status === "active") {
            showAllItems(activeItems, false);
        } else {
            showAllItems(completedItems, false);
        }
    
        // filter event
        const radioGroup = document.querySelectorAll(".checkbox-status");
        radioGroup.forEach((item) => {
            item.addEventListener("click", () => {
                if (item.value === "all") {
                    check = "all";
                    showAllItems(arr, true);
                } else if (item.value === "active") {
                    check = "active";
                    showAllItems(activeItems, false);
                } else {
                    check = "completed";
                    showAllItems(completedItems, false);
                }
            });
        });
    }catch(error) {
        alert("loading failed")
    }finally {
        hideLoading();
    }
};

fetchData();
