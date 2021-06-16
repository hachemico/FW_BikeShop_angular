bikeShop.factory('services_shop', ['services','toastr','$rootScope',  function( services,toastr,$rootScope) {
    let service = {currentUser:currentUser, update_localStorage:update_localStorage, cartClick:cartClick, search:search};
    return service;

    function currentUser(id){
        console.log("entra currentUser"+id)
        if(localStorage.token){
            // comprovar que el token del usuario es válido. timeExpiration.
            services.post('login', 'decodeTimeToken', {"token":localStorage.token})
                .then(function(response) {
                    console.log(response);
                    response2=JSON.parse(response);
                   
                    if(response2 === "CURRENT_TOKEN"){

                       //obtener el usuario sobre el que agregar el favs
                        services.post('login', 'decodeToken', {"token":localStorage.token})
                        .then(function(response3) {
                                console.log(response3);

                                //Insertar el favs en la tabla idUser+idBike+like/unlike
                                services.post('shop', 'controlFav', {"uid":response3,"idbike":id})
                                .then(function(response4) {

                                        let value=JSON.parse(response4);
                                        console.log(response4);
                                        if(value === "like"){
                                           
                                            document.getElementById('like-' + id) ? document.getElementById('like-' + id).style ="color:red" : null;
                                            if(localStorage.filterBikes){
                                                update_localStorage(id,'like'); //actualiza localStorage por si se actualiza la vista.
                                            }
                                        }
                                        else{
                                            
                                            document.getElementById('like-' + id) ? document.getElementById('like-' + id).style = "color:black" : null;
                                            if(localStorage.filterBikes){
                                                update_localStorage(id,'unlike'); //actualiza localStorage por si se actualiza la vista.
                                            }
                                        }
        
                                }, function(error) {
                                        console.log(error);
                                });// end_services


                            }, function(error) {
                                console.log(error);
                            });// end_services


                    }else if(response2 === "INVALID_TOKEN"){
                        console.log('Adios');
                            toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
                            localStorage.removeItem('token');
                            location.href="#/login"
                    }
                    console.log(response);

                }, function(error) {
                    console.log(error);
                });// end_services

        }else{
            console.log("no hay usuario");
            toastr.error('Para realizar esta acción, tiene que activar su sesión.' ,'USUARIO');
            location.href="#/login"
        }
    };


    function update_localStorage(idbike,typelike){
    
            if(typelike == "like"){

                value = localStorage.getItem('filterBikes');
                checks_main=JSON.parse(value);

                for(row in checks_main){
                    if(checks_main[row].idbike == idbike){
                        checks_main[row].favs= idbike;  //cambiamos el valor "favs" de null >> idbike(favorito)
                    }
                }
                localStorage.filterBikes=JSON.stringify(checks_main);
             

            }else if(typelike == "unlike"){
                
                value = localStorage.getItem('filterBikes');
                checks_main=JSON.parse(value);

                for(row in checks_main){ 
                    if(checks_main[row].idbike == idbike){
                        checks_main[row].favs= null;    //cambiamos el valor "favs" de idbike >> null (no favorito)
                    }
                }
                localStorage.filterBikes=JSON.stringify(checks_main);
            }
    };

    function cartClick(id){
        // console.log("dentrooo");
        // console.log(id);

        if(localStorage.token){

             services.post('login', 'decodeToken2', {"token":localStorage.token})
            .then(function(response) {
                console.log(response);                 
                                
                services.post('cart','insertLine', {"uid": response,"idBike":id})
                .then(function(response) {
                    console.log(response);    
                    // let aux = response;
                    // let parse = JSON.parse(aux);
                    if((typeof response) === 'string'){
                        toastr.info('Lo sentimos pero no puede añadir más unidades.' ,'Total Productos');
                    }else{
                        toastr.success('1 Producto añadido.' ,'Carrito');
                        let total=response[0]['SUM(qty)'];
                        console.log(total);
                        $rootScope.totalProductsHeader= total;
                        localStorage.setItem('listTotal',total);
                    }
                    
                }, function(error) {
                 console.log(error);
                });// end_services


            }, function(error) {
                        console.log(error);
            });// end_services

            
        }else{

           //CART NO USER LOGIN
            if(localStorage.cartNoLog){ //existen productos en cart
                
                let valorNoLog=localStorage.getItem('cartNoLog');
                let val=JSON.parse(valorNoLog);
                let existe=false;
                
                for(row in val){ //añadir productos al cart
                    if(val[row]['id'] == id){
                        val[row]['qty'] = (val[row]['qty']+1);
                        toastr.success('1 Producto añadido.' ,'Carrito');
                        existe = true;
                    }
                }
                if(existe == false){
                    val.push({'id':id,'qty':1});
                    toastr.success('1 Producto añadido.' ,'Carrito');
                }

                let total_prod=0;
                for(row in val){ //total productos cart
                    total_prod= total_prod+val[row]['qty'];
                }
                console.log(total_prod);
                $rootScope.totalProductsHeader= total_prod;
                localStorage.setItem('listTotal',total_prod);

                let valString=JSON.stringify(val);
                localStorage.setItem('cartNoLog',valString)
                console.log(val);
               
            }else{ // añadir productos con cart vacio
              
                let val = new Array();
                val.push({'id':id,'qty':1});
                let valString=JSON.stringify(val);
                localStorage.setItem('cartNoLog',valString)
                console.log(val);
            }
        }
    };

    function search(){
        console.log("entra en search servicesShop");
       
        if(localStorage.token){
            // comprovar que el token del usuario es válido. timeExpiration.
            services.post('login', 'decodeTimeToken', {"token":localStorage.token})
                .then(function(response) {
                    console.log(response);
                    response2=JSON.parse(response);
                   
                    if(response2 === "CURRENT_TOKEN"){
        
                       //obtener el usuario sobre el que agregar el favs
                        services.post('login', 'decodeToken2', {"token":localStorage.token})
                        .then(function(response3) {
                                console.log(response3);

                                    let valueSearch= document.getElementById('keywords').value;
                                    services.post('search', 'autocomplete', {"auto":valueSearch,"uid":response3})
                                    .then(function(response4) {
                                            console.log(response4);
                                
                                            let strResponse= JSON.stringify(response4);
                                            console.log(strResponse);
                                          
                                            localStorage.setItem('filterSearch',strResponse);
                                            localStorage.removeItem('filterBikes');
                                            location.href="#/shop/"
                                            
                                    }, function(error) {
                                         console.log(error);
                                    });// end_services
                        
                        }, function(error) {
                                console.log(error);
                        });// end_services

                        // document.getElementById('keywords').value = "";
        
                    }else if(response2 === "INVALID_TOKEN"){
                        console.log('Adios');
                            toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
                            localStorage.removeItem('token');
                            location.href="#/login"
                    }
                    console.log(response);
        
                }, function(error) {
                    console.log(error);
                });// end_services
        
        }else{
            let user="visitor";
            let valueSearch= document.getElementById('keywords').value;
            services.post('search', 'autocomplete', {"auto":valueSearch,"uid":user})
            .then(function(response4) {
                    console.log(response4);
        
                    let strResponse= JSON.stringify(response4);
                    console.log(strResponse);
                  
                    localStorage.setItem('filterSearch',strResponse);
                    localStorage.removeItem('filterBikes');
                    location.href="#/shop/"
                    
            }, function(error) {
                 console.log(error);
            });// end_services
      
        }//endIf_else



    }

}]);