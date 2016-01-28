// --- Getting started with angular: Bootstrapping the application
// 1. create our the entry point of our application

// 2. Bootstrap our application
// -- Using directive ng-app

// 2.b Programmatically

// -- Controller, binding and views

// 1. Add a BookController that contains a list of books.
//  The mock data is available inside book.js
//  Then bind the corresponding view inside index.html
//

//
// 2. Add a NavController that has a property title
// Then bind it to the corresponding view inside index.html
//

// -- Service, filter

// 1. Add a BookService that manage simple CRUD operations on our books
// then inject it inside our BookController
// Public API: getBooks, getBook(id), deleteBook(id)

// 2. Create a BookFactory with the same API than the BookService
// Then inject it inside our BookController. How different are they?
// Which one should you use?

// 3. Routing + view
// 3.a Add route for our main page '/'
//   -- This route is managed by the BookController
//   -- His template is in templates/book.html

// 3.b Add route for adding books '/books/add'
//   -- This route is managed by the BookController
//   -- Its template is in templates/add-book.html

// 3.c Add route for viewing the details of a book 'books/id'
//   -- This route is managed by the BookController
//   -- Its template is in templates/book-details.html

// 4. Bonus: Let's implement our search feature into our application (very very difficult)




