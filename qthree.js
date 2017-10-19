// Create a library with books
// add books
// remove books by title
// count the books
// books - title, author, and genre
class Library {
	constructor() {
		this.book = [];
	}

	addBook(book) {
		this.book.push(book);
	}

	bookList(list){
		var list = '';
			for (var i = 0; i < this.book.length; i++) {
			list = list + ' - ' + this.book[i].title;
		}
			return list;
	}

	removesBook(title) {
		for (var i = 0; i < this.book.length; i++) {
			if (this.book[i].title === title) {
				this.book.splice(i, 1);
			}
		}
	}

	countsBook() {
		for (var i = 0; i < this.book.length; i++) {
			}
			return this.book.length;
		}	
	}

	class Book {
		constructor(title, author, genre) {
		this.title = title;
		this.author = author;
		this.genre = genre;

		}	
	}

var library = new Library();

		console.log('adding info about books');

	var one = new Book('Atlas Shrugged','Ayn Rand','Fiction');
		console.log(one);
	var two = new Book('I Am','Wayne Dyer','children');
		console.log(two);
	var three = new Book('I think I am', 'Loiuse Hay', 'children');
		console.log(three);
	var four = new Book('Uncharted', 'Colette Baron Reed', 'Inspirational');
		console.log(four);
	var five = new Book('The Secret Healer', 'Ellin Carsta', 'Fiction');
		console.log(five);
	var six = new Book('Candy Shop Wars', 'Brandon Mull', 'Fiction');
		console.log(six);
	var seven = new Book('Your Souls Gift', 'Robert Schwartz', 'Inspirational');

		console.log('adding book to library');

		console.log(library.book);

	library.addBook(one);
		console.log(library.book);

	library.addBook(two);
		console.log(library.book);

	library.addBook(three);
		console.log(library.book);

	library.addBook(four);
		console.log(library.book);

	library.addBook(five);
		console.log(library.book);

	library.addBook(six);
		console.log(library.book);

	library.addBook(seven);
		console.log(library.book);

		console.log('creating booklist ' + library.bookList());

		console.log('counting the number of books in library: ' + library.countsBook());

		console.log('about to remove atlas shrugged, count is ' + library.book.length);
	library.removesBook('Atlas Shrugged');
		console.log('removed atlas shrugged, count is now ' + library.book.length);

	console.log('counting the number of books in library after removal: ' + library.countsBook());

		console.log('about to remove I Am, count is ' + library.book.length);
	library.removesBook('I Am');
		console.log('removed I Am, count is now ' + library.book.length);

		console.log('counting the number of books in library after removal: ' + library.countsBook());

		console.log('about to remove candy shop wars, count is ' + library.book.length);
	library.removesBook('Candy Shop Wars');
		console.log('removed Candy Shop Wars, count is now ' + library.book.length);

		console.log('counting the number of books in library after removal: ' + library.countsBook());






