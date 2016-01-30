module.exports = function (wallaby) {
  return {
    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "src/*js"
    ],
    tests: [
      "test/**/*.spec.js"
    ]
  }
};
