const title = document.getElementById("title");
const author = document.getElementById("author");
const formBtn = document.getElementById("form-button");

class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    add(Book) {
        let newnode = new Node(Books);
        const {title, author} = this;
        if (Books !== "") {

        }

    }
}