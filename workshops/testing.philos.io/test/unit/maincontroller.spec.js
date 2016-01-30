describe('MainController', function(){

  beforeEach(module('bookstore'));

  var controller, scope;

  beforeEach(inject(function($controller, $rootScope){
    scope = {}; //$rootScope.$new(true);
    console.log(scope)
    controller = $controller;
    $controller('MainController', {$scope: scope});

  }));

  it('dummy test', function(){
    expect(scope.title).toEqual('something');
    console.log(scope);
  });

  it('should not use $scope', function(){

    //var main = new WithoutScopeController();
    var main = controller('WithoutScopeController');
    expect(main.book).toEqual('book');
    console.log(main)
  });



});
