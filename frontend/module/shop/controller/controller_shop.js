// console.log("carga controller_shop.js");

bikeShop.controller('controller_shop',function($scope, services, services_shop) {
//   console.log("valor showShop"+ showShop);
// console.log("Valor databrand>"+ localStorage);
let showShop="";
let user="";

//LIST SHOP
                if(localStorage.token && !localStorage.catShop && !localStorage.filterBikes && !localStorage.idbike){ 
                        console.log("LIST SHOWSHOP token + !catshop+ !filterbike && !idbike");
                     let uemail=services.post('login','decodeToken2',{'token':localStorage.token});
                     
                     uemail.then(function(data) { //resolver los datos que llegan desde el servidor
                        // console.log(data);
                       
                        let aux= services.post('shop','getShop',{'user':data});
                        aux.then(function(data) { //resolver los datos que llegan desde el servidor
                            // console.log(data);
                            showShop=data;
                            setPage (showShop,1);

                        });//end. then_aux
                    });//end.then_uemail
                  
                }else if(!localStorage.token && !localStorage.catShop && !localStorage.filterBikes){
                    user="visitor";
                    console.log("LIST SHOWSHOP !token + !catshop+ !filterbike");
                    let aux= services.post('shop','getShop',{'user':user});
                        aux.then(function(data) { //resolver los datos que llegan desde el servidor
                            // console.log(data);
                            
                            showShop=data;
                            setPage (showShop,1);

                        });//end. then_aux
                }
               
//FILTERS

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

            if(localStorage.token ){ //USUARIO REGISTRADO
                console.log(" CLICK FILTROS + token>>> ");
                let uemail=services.post('login','decodeToken2',{'token':localStorage.token});
                
                uemail.then(function(data) { //resolver los datos que llegan desde el servidor
              
                    filteredBikes= services.post('shop','filter',{'value_filter':checks_main,'user':data});
                
                    filteredBikes.then(function(data) { //resolver los datos que llegan desde el servidor
                        // console.log(data);
                        data2=JSON.stringify(data);
                        localStorage.removeItem('catShop');
                        localStorage.setItem('filterBikes',data2); //guardamos el array devuelto por el servidor.
                        setPage(data,1);
                    });//end.then uemail
               });//end.then_uemail
             
           }else{ //PARA USUARIO SIN LOGIN
            console.log(" CLICK FILTROS + sin USUARIO>>> ");
            user="visitor";
            filteredBikes= services.post('shop','filter',{'value_filter':checks_main,'user':user});
            
                filteredBikes.then(function(data) { //resolver los datos que llegan desde el servidor
                    // console.log(data);
                    data2=JSON.stringify(data);
                    localStorage.setItem('filterBikes',data2); //guardamos el array devuelto por el servidor.
                    localStorage.removeItem('catShop');
                    setPage(data,1);
                });
            }//end_else token/visitor
      
        }else{
            
            console.log("CLICK FILTROS SIN PARAMETROS A FILTRAR");
            localStorage.removeItem('filterBikes');
        }//end_if_else
  
    } //end scope.filtrebike


//BORRAR TODOS LOS FILTROS HOME CATEGORIES / HOME CAROUSEL / FILTERS >> SHOWSHOP LIST

    $scope.clearAllFilters= function(){
        console.log("CLICK CLEAR FILTERS");
        localStorage.removeItem('filterBikes');
        localStorage.removeItem('catShop');
        setPage(showShop,1);
        location.reload();
    }

//SHOWSHOP REDIRECT HOME FROM CATEGORIES

    if(localStorage.catShop){ // Valor home redirect >>> 'categorias'.
            
            if(localStorage.token){ //user logged
                console.log(" SHOWSHOP POR REDIRECT HOME CATEGORIES + TOKEN>>> ");
                let uemail=services.post('login','decodeToken2',{'token':localStorage.token});
                let value="";
                let filteredBikes="";
                uemail.then(function(data) { //resolver los datos que llegan desde services.post
                    console.log(data);
                    value = localStorage.getItem('catShop');
                    filteredBikes= services.post('shop','homeCategories',{'value_cat':value,'user':data});
                    
                    filteredBikes.then(function(data) { //resolver los datos que llegan por services.post
                        
                        console.log(data);
                        data2=JSON.stringify(data);// object to String.
                        localStorage.removeItem('catShop');
                        localStorage.setItem('filterBikes',data2); //guardamos el array devuelto por el servidor.
                        setPage(data,1);
                    });
               });//end.then_uemail
     
            }else{
                console.log(" SHOWSHOP POR REDIRECT HOME CATEGORIES + SIN USUARIO>>> ");
                    user="visitor";
                     value = localStorage.getItem('catShop');
                                filteredBikes= services.post('shop','homeCategories',{'value_cat':value,'user':user});
                                
                                filteredBikes.then(function(data) { //resolver los datos que llegan desde services.post
                                    
                                    console.log(data);
                                    data2=JSON.stringify(data); // object to String.
                                    localStorage.removeItem('catShop');
                                    localStorage.setItem('filterBikes',data2); //guardamos el array devuelto por el servidor.
                                    setPage(data,1);
                                });
            } //END_LOCALSTORAGE                 
    } //END CATSHOP



// SHOWSHOP FILTERS >>> FROM FILTERS / HOME CATEGORIES / HOME CAROUSEL 

    if(localStorage.filterBikes && !localStorage.idbike){//Discriminamos si venimos desde LocalStorage o si hace un list ALL.

        let filteredBikes = "" ;
        value = localStorage.getItem('filterBikes');
        checks_main=JSON.parse(value);
        console.log(checks_main);
        setPage(checks_main,1);
    }
    

//SHOWSHOP BACK FROM DETAILS
    if(localStorage.idbike){
        if(localStorage.filterBikes){
            console.log("VOLVEMOS DEL DETAIL + LOCALSTORAGE.FILTERBIKES>> ");
            value = localStorage.getItem('filterBikes');
            
            let showShop=JSON.parse(value);
            setPage(showShop,1);
            localStorage.removeItem('idbike');
                //HAY QUE QUITAR EL REMOVE ITEM DEL CONTROLLER ID DETTAILS
                // Y AÑADIR LOS REMOVES AQUI.
        }else{
            
                if(localStorage.token ){ //USUARIO REGISTRADO
                    console.log("VOLVEMOS DEL DETAIL + token POR LIST>> ");
                    console.log("AAA");
                    let uemail=services.post('login','decodeToken2',{'token':localStorage.token});
                        
                    uemail.then(function(data) { //resolver los datos que llegan desde el servidor
                        // console.log(data);
                    
                        let aux= services.post('shop','getShop',{'user':data});
                        aux.then(function(data) { //resolver los datos que llegan desde el servidor
                            // console.log(data);
                            showShop=data;
                            setPage (showShop,1);
                            localStorage.removeItem('idbike');

                        });//end. then_aux
                    });//end.then_uemail
                
                }else{
                    console.log("VOLVEMOS DEL DETAIL + SIN USUARIO POR LIST>> ");
                    console.log("BBB");
                    user="visitor";
                    let aux= services.post('shop','getShop',{'user':user});
                        aux.then(function(data) { //resolver los datos que llegan desde el servidor
                            // console.log(data);
                            
                            showShop=data;
                            setPage (showShop,1);
                            localStorage.removeItem('idbike');
                        });//end. then_aux
                }
                /// no hay filtros LIST
        }//END IF TOKEN
    }//END IF IDBIKE

    $scope.showDetails = function(idbike) {
        console.log("dentro del showDetails");
        console.log("value idbike>>" );
        localStorage.idbike=idbike;
        location.href = "#/shopDetail/";
    };// end_showDetails

    $scope.pageChanged = function() {
       
        if(localStorage.filterBikes){
            console.log("PAGECHANGED + locastorage.filtebikes");
            let value="";
            value = localStorage.getItem('filterBikes');
            showShop=JSON.parse(value);
            console.log("valorShowShop");
            console.log(showShop);
            $scope.itemsPerPage = 6;
            $scope.totalItems = showShop.length;
            $scope.showShop = showShop.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));
        }
        else{
            console.log("PAGECHANGED + NORMAL");
            $scope.showShop = showShop.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));
        }
    };// end_PageChanged

    function setPage(bikeVal ="", currentPageVal) {
        console.log("SETPAGE >>>");
        // console.log("valor bikeVal"+ bikeVal)
        $scope.itemsPerPage = 6;
        $scope.currentPage = currentPageVal;
        $scope.totalItems = bikeVal.length;
        $scope.showShop = bikeVal.slice((($scope.currentPage - 1) * $scope.itemsPerPage), (($scope.currentPage) * $scope.itemsPerPage));

        
    }// end_setPage

    $scope.favClick=function(id){
        console.log("recoge click"+id);
        services_shop.currentUser(id);
    };

    $scope.cartClick=function(id){
        console.log("aaa");
        services_shop.cartClick(id);
    };
    
});