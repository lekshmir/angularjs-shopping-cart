angular.module('shoppingCart.product')
    .component('productDetails',{
        templateUrl: 'src/product/components/product-details/product-details.component.html',
        bindings: {
            product: '<'
        }
    });