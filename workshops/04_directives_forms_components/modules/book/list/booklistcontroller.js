export default function BookListController(BookFactory) {
  BookFactory.getBooks().then(function(response){
    this.books = response.data;
  }.bind(this));

  // BookFactory.getBooks().then((response) =>{
  //   this.books = response.data;
  // });
}

