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
            component: 'productList'
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