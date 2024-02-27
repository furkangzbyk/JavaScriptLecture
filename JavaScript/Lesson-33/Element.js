const link = document.createElement("a");
link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href="https://www.youtube.com/";
link.target = "_blank";
link.innerHTML = "Kişisel Video"


console.log(link);


// Element Silmek

const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");

todos[0].remove();
console.log(todos);

//Element Değiştirmek

const carBody = document.querySelectorAll(".card-body");

// <h5 class = "card-title">Todo Listesi</h5>

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesi - Yeni";

console.log(cardBody.childNodes);

