import { renderItems, showItems } from "./UI/index.js";
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


function filteredItems(data) {
    const todoItems = data.filter((item) => item.status === "todo")
    const doingItems = data.filter((item) => item.status === "doing")
    const finishedItems = data.filter((item) => item.status === "finished")
    console.log({ todoItems, doingItems, finishedItems });

    return [todoItems, doingItems, finishedItems]
}



(async function main() {
    const data = await fetchData();
    globalData = data;
    const [todoItems, doingItems, finishedItems] = filteredItems(globalData);
    showItems(todoItems)
    showItems(doingItems)
    showItems(finishedItems)
})()



