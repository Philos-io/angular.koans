import angular from '../../lib/';
import BookFactory from './services/bookservice';
import BookAddController from './add/bookaddcontroller';
import BookDetailsController from './detail/bookdetailscontroller';

angular.module('book')
  .controller('BookAddController', BookAddController)
  .controller('BookDetailsController', BookDetailsController)
  .factory('BookFactory', BookFactory);

