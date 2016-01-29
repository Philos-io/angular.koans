(function(){
  'use strict';

  BookDetailsController.$inject = ['bookFactory', '$routeParams'];

  function BookDetailsController(bookFactory, $routeParams){
    bookFactory.getBook($routeParams.id)
      .then((response)=>{
        angular.extend(this,  response.data, {}, {});
      });
  }
  angular.module('bookstore').controller('BookDetailsController', BookDetailsController);
})();
