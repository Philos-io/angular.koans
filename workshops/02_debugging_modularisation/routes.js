(function(){
  'use strict';

  routes = function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: './templates/books.html',
        controller: 'ListBookController',
        controllerAs: 'listBook'
      })
      .when('/books', {
        templateUrl: './templates/books.html',
        controller: 'ListBookController',
        controllerAs: 'listBook'
      })
      .when('/books/:id', {
        templateUrl: './templates/book-details.html',
        controller: 'BookDetailsController',
        controllerAs: 'book'
      })
      .when('/books/add', {
        templateUrl: './templates/add-book.html',
        controller: 'BookAddController',
        controllerAs: 'book'
      });
  }

   angular.module('bookstore').config(routes);
})();
