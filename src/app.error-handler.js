angular.module('shoppingCart')
.decorator('$exceptionHandler', ['$delegate', function($delegate){
    return function(exception, cause){
        console.warn("My custom handler");
        $delegate(exception, cause);
    };

}]);