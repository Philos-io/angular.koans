let ngShowDirective = ['$animate', function($animate) {,
  return {
    restrict: 'A',
    multiElement: true,
    link:(scope, element, attr) =>{
      scope.$watch(attr.ngShow, (value)=>{
        $animate[value ? 'removeClass' : 'addClass'](element, NG_HIDE_CLASS, {
          tempClasses: NG_HIDE_IN_PROGRESS_CLASS
        });
      });
    }
  };
}];

