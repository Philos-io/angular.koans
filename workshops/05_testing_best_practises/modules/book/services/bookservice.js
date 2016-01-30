export default  function BookFactory($http) {
  function getBook(id) {
    return $http.get(`http://localhost:9000/api/books/${id}`);
  }

  function getBooks() {
    return $http.get('http://localhost:9000/api/books');
  }

  function addBook(book) {
  }

  function deleteBook(id) {
  }

  return {
    getBook : getBook,
    getBooks : getBooks,
    addBook : addBook,
    deleteBook : deleteBook
  };
}

