import angular, {module, bootstrap} from './lib/';
import 'angular-route';

import './modules/book';
import './modules/common';
import routes from './routes';

module('bookstore', ['common','ngRoute','book'])
   .config(routes);

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(document.body, ['bookstore']);
});


