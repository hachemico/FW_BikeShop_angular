console.log("carga controller_home.js");

bikeShop.controller('controller_home', function($scope, $window,showCategories, showSlider) {
    localStorage.removeItem('filterBikes');
    localStorage.removeItem('catShop');

   

    let brands = 3;
    let total = showCategories.length;

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.showSlider = showSlider;

    $scope.showCategories = showCategories.slice(0, brands);

    angular.element($window).on('mousewheel', function() {
        // let footerHeight = document.getElementById('container-footer').offsetHeight;
        let footerHeight = document.getElementById('footer').offsetHeight;
        let position = $window.scrollY + footerHeight;
        let bottom = document.body.scrollHeight - $window.innerHeight;
        //////
        if (position >= bottom) {
            if (brands < total) {
                brands += 3;
                $scope.showCategories = showCategories.slice(0, brands);
                $scope.$apply();
            }else {
                angular.element($window).off('mousewheel');
            }// end_else
        }// end_if
    });



    $scope.redirectShopBrand = function(brand) {
        // let aux= JSON.stringify(brand);
        console.log("Dentro del redirect_brand");
        localStorage.catShop = brand;
        // localStorage.brandShop = brsand;
        location.href = "#/shop";
    };// end_redirectShopBrand
    
    $scope.redirectShopCat = function(categoria) {
        // let aux= JSON.stringify(categoria);
        localStorage.catShop = categoria;
        location.href = "#/shop";
    };// end_redirectShopBrand


});// end_controller



bikeShop.controller('controller_menu', function($scope, services_logIn) {
    // services_logIn.printMenu();

    // $scope.logOut = function() {
    //     services_logIn.logOut();
    // };// endlogOut
});