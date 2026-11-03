class BookList {
    #numberOfBooksMarkedAsRead = 0;
    #numberOfBooksMarkedNotRead = 0;
    #nextBook = null;
    #currentBook = null;
    #lastBook = null;
    #allBooks = [];

    addBook(book) {
        this.#allBooks.push(book);

        if (book.getRead()) {
            this.#numberOfBooksMarkedAsRead++;
        } else {
            this.#numberOfBooksMarkedNotRead++;

            if (!this.#currentBook) {
                this.#currentBook = book;
            }
        }
    }

    findFirstUnreadBook() {
        for (const book of this.#allBooks) {
            if (!book.getRead()) {
                return book;
            }
        }

        return null;
    }

    getAllBooks() {
        return this.#allBooks;
    }

    finishCurrentBook() {
        if (!this.#currentBook) return;

        this.#currentBook.setRead(true);
        this.#currentBook.setReadDate(new Date());

        this.#numberOfBooksMarkedNotRead--;
        this.#numberOfBooksMarkedAsRead++;

        this.#lastBook = this.#currentBook;

        this.#nextBook = this.findFirstUnreadBook();
        this.#currentBook = this.#nextBook;
    }

    imprimirBooks() {
        document.getElementById("booklist").innerHTML = "";
        for (const book of this.#allBooks) {

            document.getElementById("booklist").innerHTML +=
                "<div class='book'><h2>" + book.getTitle() + "</h2>" +
                "<p>" + book.getAuthor() + "</p>" +
                "<p>" + (book.getRead() ? "Read" : "not read") + "</p>" +
                + (book.getReadDate() == NaN ? "<p>" + book.getReadDate() + "</p>" : "<p></p>");
        }
    }

    imprimirReadBooks(bool) {
        let div = bool ? "readbooklist" : "notreadbooklist";
        document.getElementById(div).innerHTML = "";

        for (const book of this.#allBooks) {
            
            if(book.getRead() == bool){

                console.log(div);
                document.getElementById(div).innerHTML +=
                "<div class='book'><h2>" + book.getTitle() + "</h2>" +
                "<p>" + book.getAuthor() + "</p>" +
                "<p>" + (book.getRead() ? "Read" : "not read") + "</p>";
            }
        }
    }

}

class Book {
    #title = "";
    #author = "";
    #read = false;
    #readDate = null;

    constructor(title, author, read = false, readDate = null) {
        this.#title = title;
        this.#author = author;
        this.#read = read;
        this.#readDate = readDate;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    getRead() {
        return this.#read;
    }

    getReadDate() {
        return this.#readDate;
    }

    setRead(bool) {
        this.#read = bool;
    }

    setReadDate(date) {
        this.#readDate = date;
    }
}


document.getElementById("submitBook").addEventListener("click", (event) => {


    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;

    if(titulo == "" || autor == "") 
        return;

    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";

    bookCount();

    book = new Book(titulo, autor);

    booklist.addBook(book);
    booklist.imprimirBooks();
})

function bookCount() {
    document.getElementById("totalBook").textContent = "Total books: " + booklist.getAllBooks().length;
}


//Main


let booklist = new BookList();

let b1 = new Book("El Quijote", "Jose Piñero", false);
let b2 = new Book("El cojone", "Josabi Piñao", true, new Date());

booklist.addBook(b1);
booklist.addBook(b2);

bookCount();

booklist.imprimirBooks();
booklist.imprimirReadBooks(false);
booklist.imprimirReadBooks(true);
