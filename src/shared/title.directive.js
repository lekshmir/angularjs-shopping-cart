angular.module('shoppingCart.shared')
    .directive('prodTitle', ['$q','ProductService', function($q, ProductService){

        return {
            restrict: 'A',
            // templateUrl: 'src/shared/myfirst.directive.html',
            // scope: {}, default scope will be false
            // require: ['ngModel', 'ngShow'],
            require: 'ngModel',
            link: function(scope, el, attrs, ngModelCtrl){
                ngModelCtrl.$validators.prodTitle = function(val){
                    if(!val){
                        return true;
                    }
                    if(val.startsWith("a")){
                        return false;
                    }
                    return true;
                    
                };

                ngModelCtrl.$asyncValidators.prodAvailability = function(val){
                    var defer = $q.defer();
                    ProductService.searchProduct(val)
                        .then(function(res){
                            console.log(res);
                            if(res)
                            {
                                defer.reject();
                            
                            }
                            else
                            {
                                defer.resolve();
                            }
                            
                        });
                        return defer.promise;
                };
            }
        }

    }]);