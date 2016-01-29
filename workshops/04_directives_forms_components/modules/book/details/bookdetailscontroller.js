export default function BookDetailsController($routeParams, BookFactory) {
  if ($routeParams.id) {
    BookFactory.getBook($routeParams.id)
    .then((response) => {
      angular.extend(this, response.data);
    });
  }
}
