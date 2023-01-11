const formBtn = document.querySelector('#form-button');
const booksList = document.querySelector('.books-list');
let books = JSON.parse(localStorage.getItem('books'));

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    const { title, author } = this;
    const bookObj = { title, author };
    if (title !== '' || author !== '') {
      books.push(bookObj);
      localStorage.setItem('books', JSON.stringify(books));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  }

  removeBook() {
    const { id } = this;
    books = books.filter((book) => {
      if (book.id !== id) {
        return true;
      }
      return false;
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

const showBook = (id, title, author) => {
  const li = document.createElement('li');
  li.innerHTML = `<h2>"${title}"</h2>
    <h3> by ${author}</h3>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  li.appendChild(deleteBtn);
  booksList.appendChild(li);
  deleteBtn.addEventListener('click', () => {
    const book = new Book(id, title, author);
    id = deleteBtn.id;
    book.removeBook();
    li.remove();
    localStorage.setItem('books', JSON.stringify(books));
  });
};
document.addEventListener('DOMContentLoaded', () => {
  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = Date.now;
    const book = new Book(id, title, author);
    book.addBook();
    if (title && author) {
      showBook(book.id, book.title, book.author);
    }
  });
});
if (books !== null) {
  books.forEach((book) => {
    showBook(book.id, book.title, book.author);
  });
}