import angular from './lib/';

import './modules/book';
import './modules/common';
import routes from './routes';

angular.module('bookstore', ['common','ngRoute','book'])
   .config(routes);

document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document.body, ['bookstore']);
});


