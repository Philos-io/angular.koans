module.exports = function () {
  return {
    files: [
      'node_modules/chai/chai.js',
      'workshops/01_controller_service_filter_directive_testing/lib/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'workshops/01_controller_service_filter_directive_testing/src/*.js',
      'workshops/01_controller_service_filter_directive_testing/test/*.js'
    ],
    tests: [
      'workshops/01_controller_service_filter_directive_testing/tests/*.js'
    ]
  };
};
