(function(){
  'use strict';

  MainController.$inject = ['bookFactory'];

  function MainController(bookFactory){
    this.books = bookFactory.getBooks();
    // bookFactory.getBooks().then((response) =>{
    //   this.books = response.data;
    // });
  }

  angular.module('bookstore').controller('ListBookController', MainController)

 })();
