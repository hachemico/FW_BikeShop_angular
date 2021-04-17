function shop_detail(){
    
    if (document.getElementById('detail_shop')) {

       
        let id= localStorage.getItem('id_detail');
        console.log("DEBUG VALOR ID >>>"+id);

        ajaxPromise(
            "module/shop_detail/controller/controller_shop_detail.php?op=detail&id="+id,
            "GET",
            "JSON"
          )
            .then(function (data) {
              console.log("DEBUG AjaxPromise>>> " + data);
              let price_orig=(data.price *1.15);
              
              $('#product_title').append(
                '<h1 class="product_title" >'+data.brand+' '+data.model+'</h1>'
              )
              $('#detail_shop').append(
                '<div class="col-md-5 col-sm-6 summary-before ">'+
      
                '<div class="product-slider product-shop">'+
                  '<span class="onsale">Sale!</span>'+
                  
                  '<ul class="slides">'+
                      '<li data-thumb="view/img/temp-images/hoodie_7_front-140x140.jpg">'+
                          '<a href="view/img/temp-images/hoodie_7_front.jpg" data-imagelightbox="gallery" class="hoodie_7_front">'+
                              '<img src="'+data.img+'" class="attachment-shop_single" alt="image">'+
                          '</a>'+
                      '</li>'+
                      '<!-- <li data-thumb="view/img/temp-images/hoodie_7_back-140x140.jpg">'+
                          '<a href="view/img/temp-images/hoodie_7_back.jpg" data-imagelightbox="gallery" class="hoodie_7_back">'+
                              '<img src="view/img/temp-images/hoodie_7_back-470x470.jpg" class="attachment-shop_single" alt="image">'+
                          '</a>'+
                      '</li> -->'+

                    '</ul>'+
                  '</div>'+
                '</div>'

              ) 
              $('#fav_button_details').append(
                '<a  style="font-size:20px" id="fav2_button_details" class="btn fav2_button_details"><i class="fa fa-heart"></i></a>'
              )
              

              $('#detail_comment').append(
                '<p>'+data.comment+'</p>'
              )
              $('#detail_price').append(
                ' <p class="price"><del><span class="amount">'+price_orig+' </span></del>'+
                 '<ins><span class="amount">'+data.price+'€</span></ins></p>'
               )
               $('#detail_comment').append(
                '<span class="sku_wrapper">TALLA: <span class="sku">'+data.size+'</span>   </span>'+
                '<a></a></br>'+
               '<span class="posted_in">Categoria: <a href="#" rel="tag">'+data.category+'</a></span>'
              )

            })
            .catch(function () {
              console.log("error");
            });


        $(document).on('click','.click-volver',function (){ //Volver al shop   
             console.log("Debug Click VOLVER");
             
             setTimeout('window.location.href ="index.php?page=controller_shop&op=list";',100);   
        });
        $(document).on('click','#fav2_button_details',function (){ //Volver al shop   
          console.log("Debug Click fav2_button_details >>>");
          
          // setTimeout('window.location.href ="index.php?page=controller_shop&op=list";',100);  
         
        });
    }//end_if_getElementID_shop_details
}//end_shop_detail


function api_google_books (){ 
  // console.log("Dentro de API");	    
     
        $.ajax({
        
          url: "https://www.googleapis.com/books/v1/volumes?q=ciclismo+reparar",
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
function maps(){
    
  $(document).on('click','#img_maps',function (){
       //console.log("Debug Click maps");
       
       var data= JSON.parse(localStorage.getItem("valor_maps"));
       localStorage.removeItem('valor_maps');
       
       $("#shop").empty();
     

      var markers=[];
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: new google.maps.LatLng(38.8196654, -0.6637322),
          mapTypeId: google.maps.MapTypeId.ROADMAP
      });

  if(data.length>1){

      var infowindow = new google.maps.InfoWindow();
  
      for (var i = 0; i < data.length; i++) {
  
          var newMarker = new google.maps.Marker({
              position: new google.maps.LatLng(data[i].latitud, data[i].longitud),
              map: map,
              title: data[i].idclie
          });
  
          google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
              return function () {
                  infowindow.setContent('<strong>'+data[i].marca +'<br/>'+" PRECIO: "+data[i].cantidad+" €"+'</strong>'+'<br/>'+'<img src="'+ data[i].img +'">');
                  infowindow.open(map, newMarker);
              }
          })(newMarker, i));
  
          markers.push(newMarker);
      }
 
  }else{
      //console.log("Debug maps 1 resultado"+data);
      
      var infowindow = new google.maps.InfoWindow();
  
          var newMarker = new google.maps.Marker({
              position: new google.maps.LatLng(data.latitud, data.longitud),
              map: map,
              title: data.idclie
          });
  
          google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
              return function () {
                  infowindow.setContent('<strong>'+data.marca +'<br/>'+" PRECIO: "+data.cantidad+" €"+'</strong>'+'<br/>'+'<img src="'+ data.img +'">');
                  infowindow.open(map, newMarker);
              }
          })(newMarker, i));
  
          markers.push(newMarker);
  }
     
}); //END_ON_CLICK



} //********** END FUNCTION MAPS*********


$(document).ready(function () {
    shop_detail();  
    api_google_books();
  }); //close document_ready