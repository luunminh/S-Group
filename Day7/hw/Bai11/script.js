let msg = window.localStorage.getItem("msg");
while (msg === null || msg.trim() === "") {
  msg = window.prompt("Nhập tên của bạn");
  document.getElementById("text").innerText = ``;
}
window.localStorage.setItem("msg", msg);
document.getElementById("text").innerText = `Hello ${msg}`;
