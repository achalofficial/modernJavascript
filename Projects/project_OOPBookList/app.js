// Book Constructor
function Book( title, author, isbn){
    this.title = title ;
    this.author = author ;
    this.isbn = isbn ;
}

// UI Constructor

function UI() {}

// Add Book to List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  // Create a tr Element
  const row = document.createElement('tr');
  // Insert Cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  UI.prototype.clearField = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  list.appendChild(row);
}

// Event Listener

document.getElementById('book-form').addEventListener('submit',function (e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value ;
    
    // Instantiate Book    
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();
    
    // Add Book to List
    ui.addBookToList(book);

    // Clear Field
    ui.clearField();

    e.preventDefault();
})