// ***********Bài 1******************
const axios = require("axios");

// const fetchData = () => {
//     axios
//         .get("https://631b4048fae3df4dcff94f47.mockapi.io/api/foods")
//         .then((Response) => {
//             const arr = Response.data;
//             return arr;
//         })
//         .then((arr) => {
//             arr.forEach((element, index) => {
//                 if (element.name === "pizza") {
//                     console.log("ăn pizza");
//                 }
//                 if (element.name === "nước táo") {
//                     console.log("uống nước táo");
//                 }
//             });
//         })
//         .catch((error) => {
//             console.log("co loi~");
//         });
// };

// Bài 2

// const fetchData = () => {
//     axios
//         .get("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems")
//         .then((Response) => {
//             const arr = Response.data;
//             return arr;
//         })
//         .then((arr) => {
//             const toDoArr = arr.filter((element) => {
//                 return element.status === "todo";
//             });
//             const inProArr = arr.filter((element) => {
//                 return element.status === "in-progress";
//             });
//             const doneArr = arr.filter((element) => {
//                 return element.status === "done";
//             });

//             console.log("to do item: ");
//             toDoArr.forEach((element, index) => {
//                 console.log(
//                     `to do item ${index + 1} la: id: ${element.id}, title: ${
//                         element.title
//                     }`
//                 );
//             });

//             console.log("progress item: ");
//             inProArr.forEach((element, index) => {
//                 console.log(
//                     `in progress item ${index + 1} la: id: ${
//                         element.id
//                     }, title: ${element.title}`
//                 );
//             });

//             console.log("done item: ");
//             doneArr.forEach((element, index) => {
//                 console.log(
//                     `done item ${index + 1} la: id: ${element.id}, title: ${
//                         element.title
//                     }`
//                 );
//             });
//         })
//         .catch((error) => {
//             console.log("co loi~");
//         });
// };

const fetchData = () => {
    axios
        .get("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems")
        .then((Response) => {
            const arr = Response.data;
            return arr;
        })
        .then((arr) => {
            const toDoArr = arr.filter((element) => {
                return element.status === "todo";
            });
            const inProArr = arr.filter((element) => {
                return element.status === "in-progress";
            });
            const doneArr = arr.filter((element) => {
                return element.status === "done";
            });

            return toDoArr;

            // const toDoTag = document.querySelector("#todo");
            // console.log("todoTag");
            // toDoArr.forEach((element) => {
            //     toDoTag.innerHTML = `<li>id: ${element.id}, ${element.title} status:${element.status} </li>`;
            // });
        })
        .catch((error) => {
            console.log("co loi~");
        });
};

const main = () => {
    const todoArr = fetchData();
    const toDoTag = document.querySelector("#todo");
    console.log("todoTag");
    toDoArr.forEach((element) => {
        toDoTag.innerHTML = `<li>id: ${element.id}, ${element.title} status:${element.status} </li>`;
    });
};
main();
