console.log("carga app.js");

var bikeShop = angular.module('bikeShop', ['ngRoute', 'ui.bootstrap','ngSanitize','toastr'] );
//////
bikeShop.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
                .when("/home", {
                    
                    templateUrl: "frontend/module/home/view/view_home.html", 
                    controller: "controller_home",
                    resolve: {

                        // featuredCars: function (services) {
                        showCategories: function (services) {
                            return  services.get('home','categories');
                        },
                        // featuredCars: async function (services) {
                        //     return await services.get('home','carousel');
                        // },
                        showSlider: function (services) {
                            return services.get('home','carousel');
                        }


                    }// end_resolve


                }).when("/shop", {
                    
                        templateUrl: "frontend/module/shop/view/view_shop.html", 
                        controller: "controller_shop",
                        resolve: {
    
                            // featuredCars: function (services) {
                            showShop: function (services) {
                                return  services.get('shop','getShop');
                            }
                            // // featuredCars: async function (services) {
                            // //     return await services.get('home','carousel');
                            // // },
                            // showSlider: function (services) {
                            //     return services.get('shop','carousel');
                            // }
    
    
                        }// end_resolve
                    }).when("/shopDetail", {
                    
                        templateUrl: "frontend/module/shopDetail/view/view_shopDetail.html", 
                        controller: "controller_shopDetail",
                        resolve: {
                        }// end_resolve
                    }).when("/login", {
                    
                        templateUrl: "frontend/module/login/view/view_login.html", 
                        controller: "controller_login",
                        resolve: {
    
                            // featuredCars: function (services) {
                            // showShop: function (services) {
                            //     return  services.get('shop','getShop');
                            // }
                            // // featuredCars: async function (services) {
                            // //     return await services.get('home','carousel');
                            // // },
                            // showSlider: function (services) {
                            //     return services.get('shop','carousel');
                            // }
    
    
                        }// end_resolve
                    }).when("/register", {
                    
                        templateUrl: "frontend/module/login/view/view_register.html", 
                        controller: "controller_register",
                        resolve: {
    
                            // featuredCars: function (services) {
                            // showShop: function (services) {
                            //     return  services.get('shop','getShop');
                            // }
                            // // featuredCars: async function (services) {
                            // //     return await services.get('home','carousel');
                            // // },
                            // showSlider: function (services) {
                            //     return services.get('shop','carousel');
                            // }
    
    
                        }// end_resolve
                }).otherwise("/", {
                    templateUrl: "frontend/module/home/view/view_home.html", 
                    controller: "controller_home",
                    resolve: {

                        // featuredCars: function (services) {
                        showCategories: function (services) {
                            return  services.get('home','categories');
                        },
                        // featuredCars: async function (services) {
                        //     return await services.get('home','carousel');
                        // },
                        showSlider: function (services) {
                            return services.get('home','carousel');
                        }


                    }// end_resolve
                });
    }]);