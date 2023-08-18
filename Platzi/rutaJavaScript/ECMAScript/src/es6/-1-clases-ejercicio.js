class controlBooks {
    // Constructor
    constructor(title, author, year, isCheckedOut = false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isCheckedOut = isCheckedOut;
    }

    // Metodos
    getDetails() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}\n${this.title} by ${this.author}, published in ${this.year}`;
    }

    checkOut() {
        if (this.isCheckedOut) {
            return `The book ${this.title} is already checked out`;
        } else {
            this.isCheckedOut = true;
            return `${this.title} has been checked out`;
        }
    }

    returnBook() {
        if (!this.isCheckedOut) {
            return `The book ${this.title} is not checked out`;
        } else {
            this.isCheckedOut = false;
            return `${this.title} has been returned`;
        }
    }
}

const book = new controlBooks('1984', 'George Orwell', 1949);
console.log(book.getDetails());
console.log(book.checkOut());  // Debería imprimir: "1984 has been checked out"
console.log(book.checkOut());  // Debería imprimir: "The book 1984 is already checked out"
console.log(book.returnBook());  // Debería imprimir: "1984 has been returned"
console.log(book.returnBook());  // Debería imprimir: "The book 1984 is not checked out"
