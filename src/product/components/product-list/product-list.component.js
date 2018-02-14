angular.module('shoppingCart.product')
    .controller('ProductListCtrl',[
    function(){
        // var self = this;
        // self.products = [];
        // self.$onInit = function(){
        //     ProductService.getProducts()
        //         .then(function(result){
        //             self.products = result.data;
        //         });
        // };

    }])
    .component('productList',{
        templateUrl: 'src/product/components/product-list/product-list.component.html',
        bindings: {
            products: '<'
        },
        controller: 'ProductListCtrl'
    });