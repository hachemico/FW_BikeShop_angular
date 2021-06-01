// console.log("carga controller_shopDetail.js");

bikeShop.controller('controller_shopDetail', function($scope,services) {

$scope.detail = ('<p>hola</p>');
    console.log("funcion controller_shopDetail");
    let idbike= localStorage.idbike;
    let  rdo= services.post('shopDetail','detail',{'value_id':idbike});

    rdo.then(function(data) { //resolver los datos que llegan desde el servidor
            
        console.log(data);
        $scope.product_title= (
            data[0].brand+' '+data[0].model
          );
        $scope.img_detail = (
             data[0].img
          ) ;
        // $scope.fav_button_details(

        // );
        //   $('#fav_button_details').append(
        //     '<a  style="font-size:20px" id="fav2_button_details" class="btn fav2_button_details"><i class="fa fa-heart"></i></a>'
        //   )

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
    $scope.backShop = function() {
      
        // slocalStorage.removeItem('idbike');
        location.href = "#/shop/";
    };// end_showDetails
  
console.log(idbike);
});