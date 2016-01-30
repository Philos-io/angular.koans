export default function BookAddController($scope, $routeParams, BookFactory) {
  function addBook() {
    BookFactory.addBook($scope.book);
  }

  this.addBook = addBook;
}
