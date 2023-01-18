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

const fetchData = async () => {
    const { data } = await axios
        .get("https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo")
    return data;
}

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
const addNewItem = async (item) => {
    // showLoading();
    const { status } = await
        axios
            .post(
                `https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo`,
                item
            )
    console.log(status);
    if (status === 201) {
        main();
    }

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


async function changeStatusItem(id, job, statuss) {
    const updateItem = {
        job: job,
        status: statuss,
        // id: id,
    };
    console.log(updateItem);
    console.log(id);
    // showLoading();
    const { status } = await axios.put(
        `https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo/${id}`,
        updateItem
    )

    console.log(status);
    if (status === 200) {
        main();
    }

};

// change status event
const handleChangeStatus = (arr) => {
    const checkBoxGroup = document.querySelectorAll(".checkbox-item");
    checkBoxGroup.forEach((item) => {
        const isComplete = item.checked;
        const itemId = item.value;
        item.addEventListener(
            "click",
            () => {
                const newTtem = arr.find((element) => element.id === item.value);
                if (item.checked) {
                    console.log("checked");
                    changeStatusItem(item.value, newTtem.job, "completed");
                } else if (!item.checked) {
                    console.log("unchecked");
                    changeStatusItem(item.value, newTtem.job, "active");
                }
            }
        );
    });
};




// handle update event 
const handleUpdate = () => {
    const items = document.querySelectorAll('.content-item');
    items.forEach((item) => {
        item.addEventListener('dblclick', () => {
            item.querySelector('.edit-input').style.display = "block";
            item.querySelector('.edit-input').value = item.querySelector(".span-text").innerText;
            const itemInfo = (item.querySelector(".edit-input").id).split("-");
            item.querySelector('.edit-input').addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    updateItem(itemInfo[0], item.querySelector('.edit-input').value, itemInfo[1]);
                    item.querySelector('.edit-input').style.display = "none";
                }
            })
        })
    })
}
const updateItem = async (itemId, job, statuss) => {
    // showLoading();
    const { status } = await
        axios
            .put(
                `https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo/${itemId}`,
                {
                    job: job,
                    status: statuss,
                }
            )
    console.log(status);
    if (status === 200) {
        main();
    }
}

// handle delete event 
const handleDeleteItem = () => {
    const checkBoxDeleteGroup = document.querySelectorAll(".checkbox-delete");
    checkBoxDeleteGroup.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked) {
                deleteItem(item.value);
            }
        })
    })
}

const deleteItem = async (itemId) => {
    console.log(itemId);
    const { status } = await
        axios.delete(`https://63c6a3164ebaa802854a2ebe.mockapi.io/api/lnmtodo/todo/${itemId}`)
    console.log(status);
    if (status === 200) {
        main();
    }
}



let check = "all";

const main = async () => {
    try {
        showLoading();
        const arr = await fetchData();
        const [activeItems, completedItems] = filteredItems(arr);
        if (check === "all") {
            showAllItems(arr, true);
        } else if (check === "active") {
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
    } catch (error) {
        alert("loading failed")
    } finally {
        hideLoading();
    }
};

main();
