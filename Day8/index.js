const formTag = document.querySelector(".form-1");

const handleSubmit = (event) => {
    event.preventDefault();

    let name = document.querySelector(".input-name").value;
    let age = document.querySelector(".input-age").value;
    let classUni = document.querySelector(".input-class").value;

    setText({ name, age, classUni });
    saveCache(name, age, classUni);
};

const setText = ({ name, age, classUni }) => {
    document.querySelector(".name").innerHTML = `<b> ${name}</b>`;
    document.querySelector(".age").innerHTML = `<b> ${age}</b>`;
    document.querySelector(".class-uni").innerHTML = `<b> ${classUni}</b>`;
};  

const saveCache = (name, age, classUni) => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("classUni", classUni);
};

const loadCache = () => {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const classUni = localStorage.getItem("classUni");

    setText({ name, age, classUni });
};

formTag.addEventListener("submit", handleSubmit);

const main = () => {
    loadCache();
};
main();
