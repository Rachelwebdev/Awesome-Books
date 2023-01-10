const formBtn = document.querySelector('#form-button');
const booksList = document.querySelector('.books-list');

let books = [];

const booksAdd = (id, title, author) => {
  const li = document.createElement('li');
  li.innerHTML = `<h2>${title}</h2>
    <h3>${author}</h3>
    <hr>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  li.insertBefore(deleteBtn, li.lastElementChild);
  booksList.appendChild(li);
  deleteBtn.addEventListener('click', () => {
    books = books.filter((books) => {
      if (books.title !== title && books.author !== author) {
        return true;
      }
      return false;
    });
    localStorage.setItem('books', JSON.stringify(books));
    li.remove();
  });
};
const addBook = (title, author) => {
  if (title !== '' || author !== '') {
    const id = Date.now();
    const bookObj = { id, title, author };
    books.push(bookObj);
    localStorage.setItem('books', JSON.stringify(books));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    booksAdd(bookObj.id, bookObj.title, bookObj.author);
  }
};
const getBookFromStorage = JSON.parse(localStorage.getItem('books'));
if (getBookFromStorage) {
  books = getBookFromStorage;
}
books.forEach((book) => {
  booksAdd(book.id, book.title, book.author);
});

document.addEventListener('DOMContentLoaded', () => {
  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    addBook(title, author);
  });
});
