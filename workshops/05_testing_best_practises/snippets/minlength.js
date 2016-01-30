export default function minlengthDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, elm, attr, ctrl) {
      if (!ctrl) return;

      var minlength = 0;
      attr.$observe('minlength', function(value) {
        minlength = toInt(value) || 0;
        ctrl.$validate();
      });

      ctrl.$validators.minlength = function(modelValue, viewValue) {
        return ctrl.$isEmpty(viewValue) || viewValue.length >= minlength;
      };
    }
  };
};


