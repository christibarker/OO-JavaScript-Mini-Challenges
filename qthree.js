// Create a library with books
// add books
// remove books by title
// count the books
// books - title, author, and genre
class Library {
	constructor() {
		this.books = [];
	}

	addBooks(book) {
		this.books.push(book);
	}

	bookList(list){
		var list = '';
		for (var i = 0; i < this.books.length; i++) {
			list = list + ' - ' + this.books[i].title;
		}
		return list;
	}

	removesBook(title) {
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === title) {
				this.books.splice(i, 1);
			}
		}
	}

	countsBooks() {
		
		for (var i = 0; i < this.books.length; i++) {
		}
		return this.books.length;
	}
}

class Books {
	constructor(title, author, genre) {
	this.title = title;
	this.author = author;
	this.genre = genre;

	}	
}

var library = new Library();

console.log('adding info about books');

var one = new Books('Atlas Shrugged','Ayn Rand','Fiction');
console.log(one);
var two = new Books('I Am','Wayne Dyer','children');
console.log(two);
var three = new Books('I think I am', 'Loiuse Hay', 'children');
console.log(three);
var four = new Books('Uncharted', 'Colette Baron Reed', 'Inspirational');
console.log(four);
var five = new Books('The Secret Healer', 'Ellin Carsta', 'Fiction');
console.log(five);
var six = new Books('Candy Shop Wars', 'Brandon Mull', 'Fiction');
console.log(six);
var seven = new Books('Your Souls Gift', 'Robert Schwartz', 'Inspirational');

console.log('adding books to library');

console.log(library.books);

library.addBooks(one);
console.log(library.books);

library.addBooks(two);
console.log(library.books);

library.addBooks(three);
console.log(library.books);

library.addBooks(four);
console.log(library.books);

library.addBooks(five);
console.log(library.books);

library.addBooks(six);
console.log(library.books);

library.addBooks(seven);
console.log(library.books);

console.log('creating booklist ' + library.bookList());

console.log('counting the number of books in library: ' + library.countsBooks());

console.log('about to remove atlas shrugged, count is ' + library.books.length);
library.removesBook('Atlas Shrugged');
console.log('removed atlas shrugged, count is now ' + library.books.length);

console.log('counting the number of books in library after removal: ' + library.countsBooks());

console.log('about to remove I Am, count is ' + library.books.length);
library.removesBook('I Am');
console.log('removed I Am, count is now ' + library.books.length);

console.log('counting the number of books in library after removal: ' + library.countsBooks());

console.log('about to remove candy shop wars, count is ' + library.books.length);
library.removesBook('Candy Shop Wars');
console.log('removed Candy Shop Wars, count is now ' + library.books.length);

console.log('counting the number of books in library after removal: ' + library.countsBooks());






