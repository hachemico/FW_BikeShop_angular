// console.log("carga controller_shopDetail.js");

bikeShop.controller('controller_shopDetail', function($scope,services,services_shop) {

    $scope.detail = ('<p>hola</p>');
    console.log("funcion controller_shopDetail");


    let uemail=services.post('login','decodeToken2',{'token':localStorage.token});
                     
    uemail.then(function(data) { //resolver los datos que llegan desde el servidor
       console.log(data);
      
        let idbike= localStorage.idbike;
        let  rdo= services.post('shopDetail','detail',{'value_id':idbike , "user":data});

        rdo.then(function(data) { //resolver los datos que llegan desde el servidor
                
            console.log(data);
            $scope.detail_favs = (
                data[0].favs
            ) ;

            $scope.detail_idbike = (
                data[0].idbike
            ) ;

            $scope.product_title= (
                data[0].brand+' '+data[0].model
            );
            $scope.img_detail = (
                data[0].img
            ) ;


            
            $scope.detail_comment=(
                data[0].comment
            );
            $scope.detail_price=(
                data[0].price
            );
            $scope.detail_size=(
                data[0].size
            );
            $scope.detail_category=(
                data[0].category
            );
        
        });


       
   });//end.then_uemail




    
    $scope.favDetails = function(idbike){

        console.log("dentro del favdetails.");
        console.log(idbike);
        
        console.log(idbike);
        services_shop.currentUser(idbike);
    };
    $scope.backShop = function() {
      
        // slocalStorage.removeItem('idbike');
        location.href = "#/shop/";
    };// end_showDetails
  

});