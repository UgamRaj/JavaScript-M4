class Library {
  constructor() {
    this.books = [];
  }
}

class Books {
  constructor(title, author, availabilityStatus = true) {
    this.title = title;
    this.author = author;
    this.availabilityStatus = availabilityStatus;
  }

  checkAvailability() {
    return this.availabilityStatus;
  }
}

class Members {
  constructor(name, email, listOfBorrowedBooks) {
    this.name = name;
    this.email = email;
    this.listOfBorrowedBooks = [];
  }
  borrowBook(book) {
    if (book.availabilityStatus) {
      this.listOfBorrowedBooks.push(book);
      book.availabilityStatus = false;
      console.log(`Borrowed: ${this.name} ${book.title} by ${book.author}`);
    } else {
      console.log(`Sorry ${book.title} is currently not available`);
    }
  }
  returnBook(book) {
    const i = this.listOfBorrowedBooks.indexOf(book);
    console.log(i);
    if (i !== -1) {
      this.listOfBorrowedBooks.splice(i, 1);
      book.availabilityStatus = true;
      console.log(`Returned: ${this.name} ${book.title} by ${book.author}`);
    } else {
      console.log(` ${book.title} is currently not borrowed`);
    }
  }
  displayBorrowedBookList() {
    this.listOfBorrowedBooks.forEach((book) => {
      console.log(`${book.title} ----> ${book.author}`);
    });
  }
}

class Staff {
  constructor(library) {
    this.library = library;
  }
  addNewBook(book) {
    this.library.books.push(book);
    // book.availabilityStatus = false;
    console.log(library.books[0]);
  }
  removeBook(book) {
    const indx = this.library.books.indexOf(book);
    console.log(indx);
    if (indx != -1) {
      this.library.books.splice(indx, 1);
    }
    // book.availabilityStatus = true;
  }
  displayLibrayBook() {
    return this.library.books;
  }
}

const member1 = new Members("member1", "mem1@gmail.com");
const book1 = new Books("Ambedkar: A Life", "Shashi Tharoor");
const book2 = new Books("India’s vaccine Growth story", "Sajjan singh Dev");
const book3 = new Books("Made In India", "Amitabh Kant");
const book4 = new Books("Victory City", "Salman Rushdie");

console.log(member1);
console.log(book1);

member1.borrowBook(book1);
member1.borrowBook(book4);

const member2 = new Members("member2", "member2@gmail.com");
member2.borrowBook(book2);
member2.borrowBook(book3);
member1.borrowBook(book2);
member1.displayBorrowedBookList();
member1.returnBook(book4);
member1.displayBorrowedBookList();

const library = new Library();
const staff = new Staff(library);
console.log(staff);
const newBook1 = new Books("newBook1", "NewAuthor1");
const newBook2 = new Books("newBook2", "NewAuthor2");
const newBook3 = new Books("newBook3", "NewAuthor3");
staff.addNewBook(newBook1);
staff.addNewBook(newBook2);
staff.addNewBook(newBook3);
staff.removeBook(newBook2);

console.log(staff.displayLibrayBook());
