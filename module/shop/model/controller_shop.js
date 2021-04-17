function shop(){
  
  if (document.getElementById('shop')) {

      var drop_homecat= localStorage.getItem("categoria_cat");
      var drop_homecar= localStorage.getItem("categoria_car");
      var drop_autocom= localStorage.getItem("autocom_search");
      var drop_offset_pag= localStorage.getItem("offset_pag");
      var drop_filters= localStorage.getItem("filters");


      console.log("Valor DROP_AUTOCOM >>> "+drop_autocom);

      if(drop_homecat!==0 && drop_homecat!==null && drop_homecar==0 && drop_autocom==0){ //Condición FromHome Categorias

        console.log("Debug por DropHomecategoria >>>");
        ajaxForSearch("module/shop/controller/controller_shop.php?op=home_categoria&categoria_cat=" + drop_homecat);

      }else if(drop_homecar!==0 && drop_homecar!==null && drop_autocom==0){ //Condicion FromHome Carousel/Slider

        console.log("Debug por DropHomecarousel >>>");
        ajaxForSearch("module/shop/controller/controller_shop.php?op=home_carousel&categoria_car=" + drop_homecar);
      }else if(drop_autocom!==0 && drop_autocom!=null){
        
        console.log("Debug por Drop_Autocompleado >>>");
        ajaxForSearch("module/shop/controller/controller_shop.php?op=search&varsearch=" + drop_autocom);
     
      }else{  //Condicion Shop List
        console.log(" Debug Shop  por List >>>");
        ajaxForSearch("module/shop/controller/controller_shop.php?op=shop");

     }
      console.log("Debug Categor LocalStorage >>> "+drop_homecat);
      console.log("Debug Carousel LocalStorage >>> "+drop_homecar);
      console.log("Debug Autocom_Search LocalStorage >>> "+drop_autocom);
      console.log("Debug Offset_pag LocalStorage >>> "+drop_offset_pag);
 
      // ******* BUTTONS-CLICKS ********* //

  $(document).on('click','.product-click',function (){ // CLICK DETAILS
       var id = this.getAttribute('id');
      //  ajaxForSearch("module/shop/controller/controller_shop.php?op=single&id="+id);
      localStorage.setItem('id_detail',id); // save data
       setTimeout('window.location.href ="index.php?page=controller_shop_detail&op=list";',100);  
  });

  $(document).on('click','.click-volver',function (){ //Discrimina cuando volvemos del details, a la categoria de la que veniamos o bien realiza un list_shop.   
        // console.log("Debug Click VOLVER");

        if(drop_homecar!==0 && drop_homecar!== null){ // DROP FromHome Carousel tiene valor.
               ajaxForSearch("module/shop/controller/controller_shop.php?op=home_carousel&categoria_car=" + drop_homecar);
        }else if(drop_homecat!==0 && drop_homecat!== null){ // DROP FromHome Categorias tiene valor.
               ajaxForSearch("module/shop/controller/controller_shop.php?op=home_categoria&categoria_cat=" + drop_homecat);
        }else if(drop_autocom!==0 && drop_autocom!==null){
               ajaxForSearch("module/shop/controller/controller_shop.php?op=search&varsearch=" + drop_autocom);
         }else if(drop_offset_pag!==0 && drop_offset_pag!==null){
                ajaxForSearch("module/shop/controller/controller_shop.php?op=pagination&offset="+drop_offset_pag);
        }else{ // Details ordinario.
               ajaxForSearch("module/shop/controller/controller_shop.php?op=shop");
         }
  });

           localStorage.removeItem('categoria_cat');
           localStorage.removeItem('categoria_car');
           localStorage.removeItem('autocom_search');
           localStorage.removeItem('offset_pag');

}//   ***** end_if_get_element_shop *****

} // ************ END FUNCTION SHOP *******************

function ajaxForSearch(durl) {
    var url=durl;
    $.ajax({
       type: "GET",
       dataType: "json",
       url:durl,
   })
   .done(function(data) {
      // console.log(data);
      //  console.log("Debug ajaxDone "+data.length);
      
       if(!data){
            // console.log("data_lenght =0");
           $('#shop-all').empty();
           $('#shop-detail').empty();
           $('<div><h3>Su búsqueda no dió resultados.</h3></div>').attr('id','list').appendTo('#shop-all');
     
      }else if(data.length>=2){   
                    // ***** SHOP MUESTRA TODOS ****  
                    //console.log("DEBUG ALL");
                    $('#shop-detail').empty();
                    $('#shop-all').empty();
                    var cadena="";
                    for(var i=0; i < data.length; i++){
            
                        cadena=cadena+(
                          '<div class="col-xs-12 col-sm-6 col-md-4 product-item filter-best">'+
                              '<div class="product-img">'+
                                  '<img src="'+ data[i].img +'" class="product-click" id= "'+data[i].idbike +'" alt="" >'+
                              '</div>'+
                              '<!-- .product-img end -->'+
                              '<div class="product-bio">'+
                                '<h4>'+
                                  '<a href="#">'+data[i].category+'</a>'+
                                '</h4>'+
                                '<p class="product-price">'+data[i].brand+' '+data[i].model+' </p>'+
                              '</div>'+
                              '<!-- .product-bio end -->'+
                        
                        '<!-- .product-item end -->'+
                        '<div class="product-bio">'+
							              '<p><span style="font-size:20px">'+data[i].price+'€</span><a style="font-size:18px" id="fav_button" class="btn fav_button" name="'+data[i].idbike+'"><i class="fa fa-heart"></i></a></p>'+
						            '</div>'+
						            '<!-- .product-bio end -->'+
                        
                        '</div>'
                        );
                      }
                      $('#shop-all').append(cadena)

       }else{ // ***** DETAILS *** MUESTRA 1 ARTICULO
                
                console.log("DEBUG DETAILS");
                $('#shop-all').empty();
                $('#shop-detail').empty();
                $('#pagination').empty();
                $('#shop-detail').append(
                  '<div class="col-xs-12 col-sm-6 col-md-4 product-item filter-best">'+
                              '<div class="product-img">'+
                                  '<img src="'+ data.img +'" class="product-click" id= "'+data.idbike +'" alt="" >'+
                              '</div>'+
                              '<!-- .product-img end -->'+
                              '<div class="product-bio">'+
                                '<h4>'+
                                  '<a href="#">'+data.category+'</a>'+
                                '</h4>'+
                                '<p class="product-price">'+data.brand+' '+data.model+' </p>'+
                              '</div>'+
                              '<!-- .product-bio end -->'+
                        
                        '<!-- .product-item end -->'+
                        '<div class="product-bio">'+
							              '<p><span style="font-size:20px">'+data.price+'€</span></p>'+
						            '</div>'+
						            '<!-- .product-bio end -->'+
                        '<a style="font-size:20px" id="fav_button" class="btn fav_button"><i class="fa fa-heart"></i></a>'+
                        '</div>'
              ) // end_append  
          } //end_else   
   }) // end done

   .fail(function( data ) {
      // console.log("TO FAIL SUPER_AJAX ");
       console.log(data);
   })
  } //end_ajaxforsearch
  
 
function filters(){
    
        var count_cat1 =0, count_cat2 =0,count_cat3 =0,count_cat4 =0, count_cat5 =0;
        var count_size1 =0, count_size2 =0, count_size3 =0, count_size4 =0, count_size5 =0;
        var ctrl_cat1 =false ,ctrl_cat2 =false, ctrl_cat3 =false, ctrl_cat4 =false, ctrl_cat5 =false;
        var ctrl_size1 =false, ctrl_size2 =false, ctrl_size3 =false, ctrl_size4 =false;
        var check_cat1="",check_cat2="",check_cat3="",check_cat3="",check_cat4="",check_cat5="";
        var check_size1="",check_size2="",check_size3="",check_size3="",check_size4="",check_size5="";

        //***CHECKS CATEGORIAS ***/  
        $('#check_cat1').click(function () { //Se aplica contador y discriminamos pares e impares. Habilitando o desabilitando el control "CTRL_[]"
             count_cat1=count_cat1+1;
             if(count_cat1%2==0){
                ctrl_cat1=false;
             }else{
                ctrl_cat1=true;
             }
        });
       
        $('#check_cat2').click(function () { 
            count_cat2=count_cat2+1;
            if(count_cat2%2==0){
                ctrl_cat2=false;
             }else{
                ctrl_cat2=true;
             }
        });
 
        $('#check_cat3').click(function () { 
            count_cat3=count_cat3+1;
            if(count_cat3%2==0){
                ctrl_cat3=false;
             }else{
                ctrl_cat3=true;
             }
        });
        $('#check_cat4').click(function () { 
            count_cat4=count_cat4+1;
            if(count_cat4%2==0){
                ctrl_cat4=false;
             }else{
                ctrl_cat4=true;
             }
        });
        $('#check_cat5').click(function () { 
            count_cat5=count_cat5+1;
            if(count_cat5%2==0){
                ctrl_cat5=false;
             }else{
                ctrl_cat5=true;
             }
        });

  // *** CHECKS TALLAS ***
        $('#check_size1').click(function () { 
          count_size1=count_size1+1;
          if(count_size1%2==0){
              ctrl_size1=false;
          }else{
            ctrl_size1=true;
          }
        });
        $('#check_size2').click(function () { 
          count_size2=count_size2+1;
          if(count_size2%2==0){
            ctrl_size2=false;
          }else{
            ctrl_size2=true;
          }
        });
        $('#check_size3').click(function () { 
          count_size3=count_size3+1;
          if(count_size3%2==0){
            ctrl_size3=false;
          }else{
            ctrl_size3=true;
          }
        });
        $('#check_size4').click(function () { 
          count_size4=count_size4+1;
          if(count_size4%2==0){
            ctrl_size4=false;
          }else{
            ctrl_size4=true;
          }
        });

        $(document).on('click','#filters-button',function (){
            
            console.log("Debug_click al bucle"); //Test dentro del "click filters".

            let controllers_cat = new Array(ctrl_cat1,ctrl_cat2,ctrl_cat3,ctrl_cat4, ctrl_cat5);
            let controllers_size = new Array(ctrl_size1,ctrl_size2,ctrl_size3,ctrl_size4);

            let checks_cat = new Array(check_cat1,check_cat2,check_cat3,check_cat4,check_cat5);
            let checks_size= new Array(check_size1,check_size2,check_size3,check_size4,check_size5);

            var query_cat = new Array(" category = 'xc'", " category = 'trail'", " category = 'enduro'", " category = 'emtb'", " category = 'road'");
            var query_size = new Array(" size = 's'", " size = 'm'", " size = 'l'", " size = 'xl'");
            
            var ctrl_main = false, ctrl_sec = false, ctrl_cat= false, ctrl_size=false;
            let checks_main = "",checks_main2="";
            

            for(let i=0;i<controllers_cat.length;i++){   //Filtro solo por categorias
              
              if(controllers_cat[i] == false && ctrl_main == false){
                 checks_cat[i]="";

              }else if(controllers_cat[i] == true && ctrl_main == false){
                checks_cat[i]=query_cat[i];
                ctrl_main=true;
                ctrl_cat=true;

              }else if(controllers_cat[i] == false && ctrl_main == true){
                checks_cat[i]= "";

              }else{
                checks_cat[i]= " OR "+ query_cat[i];
              }
            }//end_for  

            if(ctrl_cat==true){ //Filtro combinado Categoria + Size
               
                for(let i=0;i<controllers_cat.length;i++){
                    ctrl_sec=false;
                    for(let j=0;j<controllers_size.length;j++){
                      
                      if(controllers_cat[i] == false && controllers_size[j]==false && ctrl_sec == false){
                          // NO SE VARIA EL ESTADO
                      }else if(controllers_cat[i] == false && controllers_size[j]==false && ctrl_sec == true){
                          // NO SE VARIA EL ESTADO 
                      }else if(controllers_cat[i] == false && controllers_size[j]==true && ctrl_sec == false){
                          // NO SE VARIA EL ESTADO
                      }else if(controllers_cat[i] == false && controllers_size[j]==true && ctrl_sec == true){
                          // NO SE VARIA EL ESTADO
                      }else if(controllers_cat[i] == true && controllers_size[j]==false && ctrl_sec == false){
                         // NO SE VARIA EL ESTADO 
                      }else if(controllers_cat[i] == true && controllers_size[j]==false && ctrl_sec == true){
                        // NO SE VARIA EL ESTADO 
                      }else if(controllers_cat[i] == true && controllers_size[j]==true && ctrl_sec == false){
    
                        checks_size[i]=(checks_size[i]+checks_cat[i]+" AND "+ query_size[j]);
                        ctrl_sec=true;
                        ctrl_size=true;

                      }else if(controllers_cat[i] == true && controllers_size[j]==true && ctrl_sec == true){
                        checks_size[i]=(checks_size[i]+" OR "+query_cat[i]+" AND "+query_size[j]);

                      }//end_if_else
                    }//end_for_size[j]
                }//end_for_cat[i]

            }else if(ctrl_cat==false){ // Filtra solo por Size.
                for(let k=0;k<controllers_size.length;k++){

                  if(controllers_size[k]==false && ctrl_sec == false){
                      // NO SE VARIA EL ESTADO
                  }else if(controllers_size[k]==true && ctrl_sec == false){
                    checks_size[k]=query_size[k];
                    ctrl_sec=true;
                    ctrl_size=true;
                  }else if(controllers_size[k]==false && ctrl_sec == true){
                      // NO SE VARIA EL ESTADO
                  }else{
                    checks_size[k]= " OR "+ query_size[k];
                  }//end_if
                }//end_for_size[j]
            }  //end_if


            for(let i=0;i<controllers_cat.length;i++){

               checks_main =checks_main+checks_cat[i];
            }
            console.log("VALOR CHECKS_MAIN >>>" + checks_main);

            for(let i=0;i<controllers_cat.length;i++){

              checks_main2 =checks_main2+checks_size[i];
            }
            console.log("VALOR CHECKS_MAIN_2 >>>" + checks_main2);
           
            if(ctrl_size==1){        
                ajaxForSearch("module/shop/controller/controller_shop.php?op=filter&checks="+checks_main2);
                localStorage.setItem('filters',checks_main2); // save data
                checks_main2="";
            }else if(ctrl_cat==1 && ctrl_size==0){
                ajaxForSearch("module/shop/controller/controller_shop.php?op=filter&checks="+checks_main);
                localStorage.setItem('filters',checks_main2); // save data
                checks_main="";
            }else{
                ajaxForSearch("module/shop/controller/controller_shop.php?op=shop"); 
            }//en_if
        }); //end_click_filters

           
      // });
    
      $(document).on('click','#reset-button',function (){
     
        count_cat1 = 0, count_cat2 = 0, count_cat3 = 0, count_cat4 = 0,count_cat5 = 0;
        count_size1 = 0,count_size2 = 0, count_size3 = 0,count_size4 = 0, count_size5 = 0;
        ctrl_cat1 =0 ,ctrl_cat2 =0,ctrl_cat3 =0,ctrl_cat4 =0, ctrl_cat5 =0;
        ctrl_size1 =0,ctrl_size2 =0, ctrl_size3 =0,ctrl_size3 =0;
        query_main="";
                document.getElementById('check_cat1').checked = false;
                document.getElementById('check_cat2').checked = false;
                document.getElementById('check_cat3').checked = false;
                document.getElementById('check_cat4').checked = false;
                document.getElementById('check_cat5').checked = false;
                document.getElementById('check_size1').checked = false;
                document.getElementById('check_size2').checked = false;
                document.getElementById('check_size3').checked = false;
                document.getElementById('check_size4').checked = false;

        ajaxForSearch("module/shop/controller/controller_shop.php?op=shop");
      });
  } // *********** END FUNCTION FILTERS ***********

  function count_categories(){  //Incrementa el valor MORE_VISITED correspondiente a las categorias.
      var drop_count_cat= localStorage.getItem("count_cat");
      
      $.ajax({
        url: "module/shop/controller/controller_shop.php?op=count_cat&category=" +drop_count_cat,
        type: "GET",
        dataType: "json",
      })
        .done(function( count_cat) {
          localStorage.removeItem('count_cat');
          // console.log("DEBUG: "+ count_cat)
        });              
  }

  function count_products(){  //Incrementa el valor MORE_VISITED correspondiente a los productos.
      $(document).on('click','.product-click',function (){
          var id = this.getAttribute('id');
   
          $.ajax({
            url: "module/shop/controller/controller_shop.php?op=count_prod&id="+id,
            type: "GET",
            dataType: "json",
          })
            .done(function( count_prod) {
               console.log("DEBUG: "+ count_prod)
            });          
      });
  }

  function pagination(){
 
    ajaxPromise(
      "module/shop/controller/controller_shop.php?op=count_all_pagination",
      "GET",
      "JSON"
    )
      .then(function (data) { //obtenemos la cantidad de productos a paginar.
        // console.log("DEBUG Pagination data.lenght >>> " + data.length);
        var page = 1;
        var offset = 0, totalPages = 0;
        var prevPage = false, nextPage = false;

        for (let i = 0; i < data.length; i++) { //calcula el num de paginas necesarias.
          if ((i % 6) == 0) {
              totalPages = totalPages + 1;
          }// end_if
        }// end_for

        if (totalPages > 1) {
            prevPage = 'Prev';
            nextPage = 'Next';
        }// end_if

        $("#pagination").bootpag({
          total: totalPages,
          page: page,
          maxVisible: totalPages,
          next: nextPage,
          prev: prevPage

       }).on("page", function (e, num) {
            // console.log("DEBUG valor NUM >>> "+num);
            // console.log("Dentro del on page >>> ");
            offset = 6 * (num - 1); //calcula valor del offset para la query.
            // console.log("DEBUG valor a enviar>>> "+ offset);
            localStorage.setItem('offset_pag',offset); // save data
            ajaxForSearch("module/shop/controller/controller_shop.php?op=pagination&offset="+offset);
          }); //End_on_Page
      })
      .catch(function () {
        // console.log("DEBUG error AjaxProm Pagination1 >>>");
      });

} //    ****************    END_ PAGINATION     **************

   function fav_button(){
    $(document).on('click','.fav_button',function (){ // CLICK DETAILS
      console.log("DEBUG click fav_button >>> ");
      //  let this_btn = $(this);
       let atr_idbike = this.getAttribute('name'); // guardamos el valor el atributo "name" correspondiente al articulo que queremos hacer fav.
      if(localStorage.getItem('token')!=null){ //discriminamos si existe token de usuario log.

        let down_token = localStorage.getItem('token'); //obtenemos el token del usuario.
        token = down_token.replace(/"/g,''); //Quitamos las comillas para dejar el token limpio
        console.log(token);

        //**********************************
        //aqui hay que validar el token "time" para continuar que la sesion sea valida.
        //*********************************

        ajax_log('module/shop/controller/controller_shop.php?&op=favs',{"token":token})
                  .then(function (data) {
                      console.log("DEBUG valor usuari favs >>>"+ data);
                      console.log("DEBUG valor id_bike>> "+atr_idbike);    //valor del id_producto al que tenemos que añadir el fav.                  
                      aux_data=JSON.decode(data);
                      aux2=aux_data[0].email;
                      console.log("AAA"+aux2);

                      // ajax_log('module/shop/controller/controller_shop.php?&op=insertfavs',{"data_favs":atr_idbike,"data_user":data})
                      // .then(function (data) {
                      //     console.log("DEBUG valor data favs >>>"+ data);
                          
                      //     console.log("DEBUG valor id_bike>> "+atr_idbike);    //valor del id_producto al que tenemos que añadir el fav.                  
                         
    
                      // }) //end_ajax_log



        }) //end_ajax_log

      }else{ //No existe el token, realizar acciones para hacer login o register

        setTimeout('window.location.href ="index.php?page=controller_login&op=list_login";',1000);
      }




     });  // console.log("DEBUG carga fav_buton function >>>");
    
   }
     
  function api_google_books (){ 
    // console.log("Dentro de API");	    
       
          $.ajax({
          
            url: "https://www.googleapis.com/books/v1/volumes?q=ciclismo+entrenamiento",
            type: "GET",
            dataType: "json",
            
          })
          .done(function( data_books) {
          // console.log(data_books);
          //  console.log(data_books.items[0].volumeInfo.title);
           
           $("#viewerCanvas").empty(); 
            var inc= 0;
              $.each(data_books.items, function(i,item){
  
                $('#viewerCanvas').append(
                            '<td>'+
                              '<img src="'+ data_books.items[inc].volumeInfo.imageLinks.thumbnail+'">'+
                              '<p><strong>Titulo: </strong>'+data_books.items[inc].volumeInfo.title+'</p>'+
                              '<p><strong>Autores: </strong>'+data_books.items[inc].volumeInfo.authors+'</p>'+
                              '</td>'
                           )
                    inc=inc+1;
                    if ( i == 4 ) return false;
             
            });
           
          });
  
  } //END FUNCTION API GOOGLE BOOKS

  $(document).ready(function () {
    shop();  
    ajaxForSearch();
    filters();
    count_categories();
    count_products();
    pagination();
    api_google_books ()
    fav_button();
  }); //close document_ready