(function(){
  'use strict';

    RouteConfig.$inject = ['$routeProvider'];

    function RouteConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './modules/book/list/book.html',
                controller: 'BookListController',
                controllerAs :'bookList'
            })
            .when('/books/add', {
                templateUrl: './modules/book/add/add-book.html',
                controller: 'BookAddController'
            })
            .when('/books/:id', {
                templateUrl: './modules/book/details/book-details.html',
                controller: 'BookDetailsController'
            });
    }

    angular.module('book').config(RouteConfig);
})();

