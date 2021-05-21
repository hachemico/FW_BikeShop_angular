console.log("carga controller_shop.js");

bikeShop.controller('controller_shop', function($scope, services, showShop) {
//   console.log("valor showShop"+ showShop);
// console.log("Valor databrand>"+ localStorage);

    let countXc= 0,countTrail=0,countEnduro=0,countEmtb=0,countRoad=0;

     $scope.clickXc = function(value) {
        console.log("click XC "+ value );
            if(countXc==false){
                countXc=true;
            }else if(countXc==true){
                countXc=false;
            }
            console.log(countXc);
    };

    $scope.clickTrail = function(value) {
        console.log("click trail "+ value );
        if(countTrail==false){
            countTrail=true;
        }else if(countTrail==true){
            countTrail=false;
        }
        console.log(countTrail);
    };

    $scope.clickEnduro = function(value) {
        console.log("click Enduro "+ value );
        if(countEnduro==false){
            countEnduro=true;
        }else if(countEnduro==true){
            countEnduro=false;
        }
        console.log(countEnduro);
    };

    $scope.clickEmtb = function(value) {
        console.log("click EMTB "+ value );
        if(countEmtb==false){
            countEmtb=true;
        }else if(countEmtb==true){
            countEmtb=false;
        }
        console.log(countEmtb);
    };

    $scope.clickRoad = function(value) {
        console.log("click Road "+ value );
        if(countRoad ==false){
            countRoad=true;
        }else if(countRoad==true){
            countRoad=false;
        }
        console.log(countRoad);
    };
    
    $scope.filterBike = function() { // SEND FILTERS
      localStorage.removeItem('filterBikes');

    let controllers_cat =[countXc,countTrail,countEnduro,countEmtb,countRoad];
    let query_cat = [" category = 'xc'", " category = 'trail'", " category = 'enduro'", " category = 'emtb'", " category = 'road'"];

    let checks_cat = ["","","","",""];
       
    let ctrl_main = false, ctrl_sec = false, ctrl_cat= false, ctrl_size=false;
    let checks_main = "";
        
       for(row in controllers_cat){   //Filtro solo por categorias
              
            if(controllers_cat[row] == false && ctrl_main == false){
            checks_cat[row]="";

            }else if(controllers_cat[row] == true && ctrl_main == false){
            checks_cat[row]=query_cat[row];
            ctrl_main=true;
            ctrl_cat=true;

            }else if(controllers_cat[row] == false && ctrl_main == true){
            checks_cat[row]= "";

            }else{
            checks_cat[row]= " OR "+ query_cat[row];
            }
        }//end_for  

      for( row in controllers_cat){ // montamos la query >>>
            checks_main = checks_main+checks_cat[row];
      }
    //   console.log("Valor checksMAIN> "+checks_main);
        if(checks_main != ""){
            let filteredBikes = "" ;
            filteredBikes= services.post('shop','filter',{'value_filter':checks_main});
            
            filteredBikes.then(function(data) { //resolver los datos que llegan desde el servidor
                console.log(data);
                data2=JSON.stringify(data);
                localStorage.setItem('filterBikes',data2); //guardamos el array devuelto por el servidor.
                setPage(data,1);
            });
        }else{
            setPage(showShop,1);
            localStorage.removeItem('filterBikes');
        }//end_if_else
  
    } //end scope.filtrebike





    $scope.clearAllFilters= function(){
        localStorage.removeItem('filterBikes');
        setPage(showShop,1);
    }

    if(localStorage.catShop){ // Recogemos valor redirect from 'categorias'.

        let value = localStorage.getItem('catShop');
        let  filteredBikes= services.post('shop','homeCategories',{'value_cat':value});
        localStorage.removeItem('catShop');

        filteredBikes.then(function(data) { //resolver los datos que llegan desde el servidor
            
            console.log("VALOR brandShop>> "+data);
            data2=JSON.stringify(data);
            localStorage.setItem('filterBikes',data2); //guardamos el array devuelto por el servidor.
            setPage(data,1);
        });
    } //END CATSHOP




    if(localStorage.filterBikes){//Discriminamos si venimos desde LocalStorage o si hace un list ALL.
        
        let value="";
        value = localStorage.getItem('filterBikes');
        showShop=JSON.parse(value);
        setPage (showShop,1);

    }else{
        setPage(showShop,1);
    }// end_else


    $scope.showDetails = function(idbike) {
        console.log("dentro del showDetails");
        console.log("value idbike>>" );
        localStorage.idbike=idbike;
        location.href = "#/shopDetail/";
    };// end_showDetails

    $scope.pageChanged = function() {
       
        if(localStorage.filterBikes){
            let value="";
            value = localStorage.getItem('filterBikes');
            showShop=JSON.parse(value);

            $scope.itemsPerPage = 6;
            $scope.totalItems = showShop.length;
            $scope.showShop = showShop.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));
        }else{
            $scope.showShop = showShop.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));
        }
    };// end_PageChanged

    function setPage(bikeVal ="", currentPageVal) {
        console.log("dentro de setpage>");
        console.log("valor bikeVal"+ bikeVal)
        $scope.itemsPerPage = 6;
        $scope.currentPage = currentPageVal;
        $scope.totalItems = bikeVal.length;
        $scope.showShop = bikeVal.slice((($scope.currentPage - 1) * $scope.itemsPerPage), (($scope.currentPage) * $scope.itemsPerPage));

        
    }// end_setPage

    
});