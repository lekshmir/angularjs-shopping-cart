angular.module('shoppingCart.product')
    .controller('AddProductCtrl',['ProductService', 
    function(ProductService){
        this.newProduct = {};

        this.onFormSubmit = function(e){
            e.preventDefault();
            ProductService.addProduct(this.newProduct).then(function(){
                alert("Added Successfully");
            });
        };
    }])
    .component('addProduct',{
        templateUrl: 'src/product/components/add-product/add-product.component.html',
        controller: 'AddProductCtrl'
    });