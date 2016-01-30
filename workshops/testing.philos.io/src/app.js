(function(){
  'use strict';

  angular.module('bookstore', [])
  .controller('MainController', function($scope){
    $scope.title = "something";
  })
  .controller('WithoutScopeController', function(){
    this.book = 'book';
  });
})();
