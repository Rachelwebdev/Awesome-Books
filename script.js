const formBtn = document.querySelector('#form-button');
const booksList = document.querySelector('.books-list');
let books = JSON.parse(localStorage.getItem('books'));

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}
