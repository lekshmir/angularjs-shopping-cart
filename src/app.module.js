var shoppingApp = angular.module('shoppingCart',[
    'ui.router',
    'shoppingCart.shared',
    'shoppingCart.product',    
    'shoppingCart.cart'
]);

shoppingApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state({
            name: 'home',
            url: '/',
            component: 'productList',
            resolve: {
                products: ['ProductService', function(ProductService){
                    return ProductService.getProducts()
                    .then(function(result){
                        return result.data;
                    });
                }]
            }
        });
        $stateProvider.state({
            name: 'showProdInfo',
            url: '/product-details/{productId}',
            component: 'productDetails',
            resolve: {
                product: ['ProductService', '$transition$', 
                function(ProductService, $transition$){
                    var productID = $transition$.params().productId;
                    return ProductService.getProductDetails(productID)
                    .then(function(result){
                        return result.data;
                    });
                }]
            }
        });
        $stateProvider.state({
            name: 'addProduct',
            url: '/add-product',
            component: 'addProduct'
        });
        $stateProvider.state({
            name: 'cart',
            url: '/cart',
            component: 'cart'
        });
        $urlRouterProvider.otherwise('/');
    }]);