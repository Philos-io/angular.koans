(function(){
  'use strict';
  angular.module('bookstore', ['ngRoute']);

  document.addEventListener('DOMContentLoaded', ()=>{
    angular.bootstrap(document.body, ['bookstore']);
  });

})();
