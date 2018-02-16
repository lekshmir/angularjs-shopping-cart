angular.module('shoppingCart.shared')
    .directive('myFirst', [function(){

        return {
            restrict: 'EA',
            templateUrl: 'src/shared/myfirst.directive.html',
            scope: {},
            link: function(scope, element, attributes){

            }
        };

    }]);