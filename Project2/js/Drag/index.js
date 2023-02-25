import $, { getElmById, editItem } from "../index.js";

export function handleDragEvent() {
    const items = document.querySelectorAll(".content-item")
    const itemList = document.querySelectorAll(".content-list")

    items.forEach(item => {
        item.addEventListener('dragstart', () => {
            item.classList.add("dragging")
        })

        item.addEventListener('dragend', () => {
            item.classList.remove("dragging")
            item.parentElement.classList.remove("drag-modal")

        })
    })

    itemList.forEach(list => {
        list.addEventListener("dragover", (e) => {
            e.preventDefault();
            list.classList.add("drag-modal")
        })

        list.addEventListener("dragleave", (e) => {
            e.preventDefault();
            list.classList.remove("drag-modal")
        })

        list.addEventListener("drop", (e) => {
            const status = (e.target.classList)[1].replace("-wrap", "")
            const draggable = $(".dragging");
            // console.log(draggable);
            list.appendChild(draggable)
            const id = draggable.querySelector(".content-btn").id
            const { category, time, content, title } = getElmById(id);
            // console.log({ category, content, title, status, id });
            if (editItem(category, content, title, status, id)) {
                console.log("edit successful");
            }
        })
    })


}

