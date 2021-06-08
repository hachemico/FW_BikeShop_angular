bikeShop.factory('services_shop', ['services','toastr','$rootScope',  function( services,toastr,$rootScope) {
    let service = {currentUser:currentUser, update_localStorage:update_localStorage, cartClick:cartClick};
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
                        checks_main[row].favs= idbike;  //cambiamos el valor "favs" de null >> idbike
                    }
                }
                localStorage.filterBikes=JSON.stringify(checks_main);
             

            }else if(typelike == "unlike"){
                
                value = localStorage.getItem('filterBikes');
                checks_main=JSON.parse(value);

                for(row in checks_main){ 
                    if(checks_main[row].idbike == idbike){
                        checks_main[row].favs= null;    //cambiamos el valor "favs" de idbike >> null
                    }
                }
                localStorage.filterBikes=JSON.stringify(checks_main);
            }
    };

    function cartClick(id){
        console.log("dentrooo");
        console.log(id);

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
                        $total=response[0]['SUM(qty)'];
                        console.log($total);
                        $rootScope.totalProductsHeader= $total;
                        localStorage.setItem('listTotal',$total);
                    }
                    
                }, function(error) {
                 console.log(error);
                });// end_services


            }, function(error) {
                        console.log(error);
            });// end_services
            // console.log("AAAs");
            
        }else{

            //// AÑADIR CONTROL USER NO/LOGGED LOCALSTORAGE.
        }

    };



}]);