const formBtn = document.querySelector("#form-button");
const booksList = document.querySelector(".books-list");
let books = JSON.parse(localStorage.getItem("books"));

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  addBook() {
    const { title, author } = this;
    const bookObj = { title, author };
    if (title !== "" || author !== "") {
      books.push(bookObj);
      localStorage.setItem("books", JSON.stringify(books));
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
    }
  }
}
