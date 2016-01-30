import angular from '../../lib/';
import BookFactory from './services/bookservice';
import BookAddController from './add/bookaddcontroller';
import BookListController from './list/booklistcontroller';
import BookDetailsController from './details/bookdetailscontroller';

angular.module('book', [])
  .controller('BookListController', BookListController)
  .controller('BookAddController', BookAddController)
  .controller('BookDetailsController', BookDetailsController)
  .factory('BookFactory', BookFactory);

