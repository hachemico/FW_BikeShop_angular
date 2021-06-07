// console.log("carga controller_shopDetail.js");

bikeShop.controller('controller_shopDetail', function($scope,services,services_shop) {

    let uemail=services.post('login','decodeToken2',{'token':localStorage.token});
                     
    uemail.then(function(data) { //resolver los datos que llegan desde el servidor
       console.log(data);
      
        let idbike= localStorage.idbike;
        let  rdo= services.post('shopDetail','detail',{'value_id':idbike , "user":data});

        rdo.then(function(data) { //resolver los datos que llegan desde el servidor
                console.log(data);
            $scope.showDetails= data;

        });       
   });//end.then_uemail


    
    $scope.favDetails = function(idbike){

        services_shop.currentUser(idbike);
    };

    $scope.backShop = function() {
      
        location.href = "#/shop/";
    };// end_showDetails
  

});