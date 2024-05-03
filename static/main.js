// 1. Exploring JavaScript Objects


// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

// Task 2: Implement a method within the Book object to display book information.

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    display = () => {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
    }
}

let library = []

function addBook(title, author, pages) {
   let newBook = new Book (title, author, pages)
   library.push(newBook)
}

function searchBook(title = "", author = "" ){
    for (let findBook of library){
        if (findBook.title == title || findBook.author == author){
            console.log(`YAY! We found your book. ${findBook.title}, by ${findBook.author}`)
        }
    }
}

function bigBook(pages){
    let countPages = library.filter(books => books.pages > 100)
    return countPages
}

function addTitleAuthor(){
    let titleAuthor = library.map(books => `Title: ${books.title}, Author: ${books.author}`)
    return titleAuthor
}

addBook('Love her wild', 'Atticus', 100)
addBook('The sun and her flowers', 'Rupi Kaur', 300)

searchBook('Love her wild')
searchBook('', 'Rupi Kaur')

console.log(bigBook())
console.log(addTitleAuthor())

// 2. Exploring Objects and Math in JavaScript


// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

// Task 2: Implement methods within the Account object to deposit and withdraw funds.

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.


class Account {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    deposit = (amount) => {
        this.balance += amount
    }

    withdraw = (amount) => {
        this.balance -= amount
    }

    compoundInterest = (rate, time) => {
        let compoundInterest = this.balance * Math.pow(1 + rate, time)
        return compoundInterest
    }
}

let account1 = new Account(1234, 1000, 'John Doe')
account1.deposit(100)
account1.withdraw(50)
console.log(account1.balance)
console.log(account1.compoundInterest(0.1, 2))
