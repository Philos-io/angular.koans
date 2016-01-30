export default function RouteConfig($routeProvider) {
  $routeProvider
     .when('/', {
       template: '<books></books>'
       })
     .when('/books/add', {
       template: '<book-add></book-add>'
       })
     .when('/books/:id', {
       template: '<book-details></book-details>'
     });
}
