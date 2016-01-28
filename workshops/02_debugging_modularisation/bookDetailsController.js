(function(){
  'use strict';

  BookDetailsController.$inject = ['bookFactory', '$routeParams'];

  function BookDetailsController(bookFactory, $routeParams){
    bookFactory.getBook($routeParams.id)
      .then(function(response){
        // this.book = response.data;
        angular.extend(this,  response.data);
      });
  }

  angular.module('bookstore').controller('BookDetailsController', BookDetailsController);
})();
