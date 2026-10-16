
class Cat {
    #tiredness = 0;
    #hunger = 0;
    #lonliness = 0;
    #hapiness = 0;

    constructor(tiredness, hunger, lonliness, hapiness){
        this.#tiredness = tiredness ;
        this.#hunger = hunger ;
        this.#lonliness = lonliness; 
        this.#hapiness = hapiness ;
    }

    feed() {
        this.#hunger += 10;
    }

    sleep() {
        this.#tiredness += -10;
        return this.#tiredness;
    }

    pet() {
        this.#hapiness += 10;
    }

}

//loki = new Cat(10, 10, 10 ,10);
//console.log(loki.sleep());


class BookList  {
    #numberOfBooksMarkedAsRead;
    #numberOfBooksMarkedNotRead;
    #nextBook;
    #currentBook;
    #lastBook;
    #allBooks = [];

    constructor () {
        this.#numberOfBooksMarkedAsRead = 0;
        this.#numberOfBooksMarkedNotRead = 0;
        this.#allBooks = [];
    }

    addBook(book){
        this.#numberOfBooksMarkedNotRead++;
        this.#allBooks.push(book);
        this.#currentBook = book;
        
    }

    findFirstUnreadBook() {
        for(book of this.#allBooks) {
            if(book.getRead() == false)
                return book;
        }
    }

    finishCurrentBook() {
        this.#numberOfBooksMarkedNotRead--;
        this.#numberOfBooksMarkedAsRead++;
        this.#lastBook = this.#currentBook;
        this.#currentBook.setRead(true);
        this.#currentBook.setReadDate(new Date());
        this.#nextBook = this.findFirstUnreadBook();
    }
}

class Book {
    #title = "";
    #author = "";
    #read = false;
    #readDate;

    constructor (title, author, read, readDate = "") {
        this.#title = title;
        this.#author = author;
        this.#read = read;
        this.#readDate = readDate;
    }

    getRead () {
        return this.#read;
    }

    setRead (bool) {
        this.#read = bool;
    }

    setReadDate(date) {
        this.#readDate = date;
    }


}

//booklist = new BookList();
//b1 = new Book("El Quijote", "Jose Piñero", false);

