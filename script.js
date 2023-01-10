//const title = document.getElementById("title");
//const author = document.getElementById("author");
const formBtn = document.querySelector("#form-button");
const booksList = document.querySelector(".books-list");

let books = [];

const booksAdd = (id, title, author) => {
  const li = document.createElement("li");
  li.innerHTML = `<h2>${title}</h2>
    <h3>${author}</h3>
    <hr>`;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  li.insertBefore(deleteBtn, li.lastElementChild);
  booksList.appendChild(li);
  deleteBtn.addEventListener("click", () => {
    books = books.filter((books) => {
      if (books.title !== title && books.author !== author) {
        return true;
      } else {
        return false;
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
    li.remove();
  });
};
