console.log("Carga controllerHome.js");


function carousel(){
  // console.log("Carga Carousel.js");
  ajaxPromise(
    "index.php?module=home&function=carousel",
    "POST",
    "JSON"
  )
.then(function(data) {
    // console.log("Debug valor ajax Carousel >>>"+ d)ata[0].ruta);
    console.log("Debug valor ajax Carousel >>>"+ data);
    var cadena="";
    for(var i=0; i < data.length; i++){
      cadena=cadena+(
      '<div class="owl-content">'+
       '<div class="product-item filter-best">'+
            '<div class="product-img">'+
                '<img src="'+ data[i].ruta +'" id= "'+data[i].categoria +'"class="carousel-click" alt="" >'+
            '</div>'+
            '<!-- .product-img end -->'+
            '<div class="product-bio">'+
                 '<h4>'+
                   '<a href="#">'+data[i].categoria+'</a>'+
                 '</h4>'+
              '<p class="product-price"></p>'+
            '</div>'+
            '<!-- .product-bio end -->'+
         '</div>'+
           '<!-- .product-item end -->'+
       '</div>');
    } //end_for

   $('.owl-carousel').append(cadena);   
   $(".owl-carousel").owlCarousel({
     slideSpeed : 500,
     rewindSpeed : 1000,
     mouseDrag : true,
     stopOnHover : true
   });
   /* Own navigation */
   $(".owl-nav-prev").click(function(){
     $(this).parent().next(".owl-carousel").trigger('owl.prev');
   });
   $(".owl-nav-next").click(function(){
     $(this).parent().next(".owl-carousel").trigger('owl.next');
   });

 }).catch(function(error) {
         console.log("Error Ajax Carousel"); 
  });   
} // end_function_carousel
 
 function categoria (){
 
      ajaxPromise(
        "index.php?module=home&function=categories",
        "POST",
        "JSON"
      )
    .then(function(data_cat) {
    // console.log("Debug valor ajax Carousel >>>"+ data[0].ruta);
    //  console.log(data_cat);

       for(var i=0; i < data_cat.length; i++){
 
         $('#shop-all').append(
 
          '<!-- Product Item #1 -->'+
          '<div class="col-xs-12 col-sm-6 col-md-3 product-item filter-best">'+
            '<div class="product-img">'+
            '<img src="'+ data_cat[i].ruta +'" id= "'+data_cat[i].categoria +'" class="category-click" alt="" >'+
            '</div>'+
            '<!-- .product-img end -->'+
            '<div class="product-bio">'+
              '<h4>'+
                '<a href="#">'+data_cat[i].categoria+'</a>'+
              '</h4>'+
             // '<p class="product-price">$68.00</p>'+
            '</div>'+
            '<!-- .product-bio end -->'+
          '</div>'+
          '<!-- .product-item end -->'
         )} 
        }).catch(function(error) {
          console.log("Error Ajax Carousel"); 
   });   

 }// end_function_categoria
 
 function connect_categoria(){
  
  $(document).on('click','.category-click',function (){
    
    var cero=0;
    var categoria_cat = this.getAttribute('id');
  
    localStorage.setItem('categoria_cat',categoria_cat); // save data
    localStorage.setItem('categoria_car',cero); // save data
    localStorage.setItem('autocom_search',cero); // save data
    localStorage.setItem('count_cat',categoria_cat); // save data
    localStorage.setItem('offset_pag',cero); // save data
    localStorage.setItem('filters',cero); // save data
    
    setTimeout('window.location.href ="index.php?module=shop&function=list";',1000);
  }); //end_onclick
}

function connect_carousel(){
  
  $(document).on('click','.carousel-click',function (){
  
    var cero=0;
    var categoria_car = this.getAttribute('id');

    localStorage.setItem('categoria_car',categoria_car); // save data
    localStorage.setItem('categoria_cat',cero); // save data
    localStorage.setItem('autocom_search',cero); // save data
    localStorage.setItem('count_cat',categoria_car); // save data
    localStorage.setItem('offset_pag',cero); // save data
    localStorage.setItem('filters',cero); // save data
      // setTimeout('window.location.href ="index.php?module=controller_shop&function=list";',1000);  
      setTimeout('window.location.href ="index.php?module=shop&function=list";',1000);
      
  }); //end_onclick
 
}//end_function_carousel

function scroll(){
 
  var total_cat;
  ajaxPromise(
    "index.php?module=home&function=countCategories",
    "POST",
    "JSON"
  )
  .then(function(count_cat) {
         total_cat=count_cat[0].count;
        // console.log("DEBUG >>> "+ count_cat[0].count);
        // console.log("DEBUG >>> "+ total_cat);

      // console.log("DEBUG ajax done count categories >>> ");

  }).catch(function(error) {
    console.log("Error Ajax Carousel"); 
  });   

    var current_page	=	1;
    var oldscroll		=	0;
  
    $(window).scroll(function() {
      if( $(window).scrollTop() > oldscroll ){ // Compara con la propiedad scrollTop. para determinar que estamos bajando.
        if( ($(window).scrollTop() + $(window).height() >= $(document).height()  )  ) {
              // console.log("SCROLLLLL ");
              var categories_for_row = 4;
              var  offset_cat={"offset":(current_page*categories_for_row)};

              ajaxPromise(
                "index.php?module=home&function=moreCategories",
                "POST",
                "JSON",
                offset_cat
              )
              .then(function(data_cat) {
                // console.log("Debug data_moreCat >>>"+data_moreCat);

            current_page=current_page+1;

            for(var i=0; i < data_cat.length; i++){
 
              $('#shop-all').append(
      
               '<!-- Product Item #1 -->'+
               '<div class="col-xs-12 col-sm-6 col-md-3 product-item filter-best">'+
                 '<div class="product-img">'+
                 '<img src="'+ data_cat[i].ruta +'" id= "'+data_cat[i].categoria +'" class="category-click" alt="" >'+
                 '</div>'+
                 '<!-- .product-img end -->'+
                 '<div class="product-bio">'+
                   '<h4>'+
                     '<a href="#">'+data_cat[i].categoria+'</a>'+
                   '</h4>'+
                  // '<p class="product-price">$68.00</p>'+
                 '</div>'+
                 '<!-- .product-bio end -->'+
               '</div>'+
               '<!-- .product-item end -->'
              )} //end_for

            if (data_cat=="" || data_cat == null){
              $(".scrolldown").empty();
              // api_google_books(); //llamanmos a la función que carga los productos recomendados.
            } 

        }).catch(function(error) {
          console.log("Error Ajax Scroll"); 
        });   




        } //end_if
      }//end_if
    });
  
  
  
  
    // $.ajax({
  //   url: "module/home/controller/controller_home.php?op=count_categories",
  //   type: "GET",
  //   dataType: "json",
  // })
  // .done(function(count_cat) {
  //    total_cat=count_cat[0].count;
  //    console.log("DEBUG >>> "+ count_cat[0].count);
  //   // console.log("DEBUG ajax done count categories >>> ");
  // }); //end Ajax_done
  
  
  // var total_rows= (total_cat / categories_for_row);
  // var current_page	=	1;
  // var oldscroll		=	0;

  // console.log("DEBUG ajax done count categories >>> "+ total_rows);

    // $(window).scroll(function() {
    //   if( $(window).scrollTop() > oldscroll ){ // Compara con la propiedad scrollTop. para determinar que estamos bajando.
    //     if( ($(window).scrollTop() + $(window).height() >= $(document).height()  )  ) {
    //           // console.log("SCROLLLLL ");
    //           var categories_for_row = 4;
    //           var  offset_cat=(current_page*categories_for_row);
          
    //       $.ajax({
    //         url: "module/home/controller/controller_home.php?op=more_categories&scroll="+ offset_cat,
    //         type: "GET",
    //         dataType: "json",
    //       })
    //       .done(function(data_cat) {
            
    //         current_page=current_page+1;

    //         for(var i=0; i < data_cat.length; i++){
 
    //           $('#shop-all').append(
      
    //            '<!-- Product Item #1 -->'+
    //            '<div class="col-xs-12 col-sm-6 col-md-3 product-item filter-best">'+
    //              '<div class="product-img">'+
    //              '<img src="'+ data_cat[i].ruta +'" id= "'+data_cat[i].categoria +'" class="category-click" alt="" >'+
    //              '</div>'+
    //              '<!-- .product-img end -->'+
    //              '<div class="product-bio">'+
    //                '<h4>'+
    //                  '<a href="#">'+data_cat[i].categoria+'</a>'+
    //                '</h4>'+
    //               // '<p class="product-price">$68.00</p>'+
    //              '</div>'+
    //              '<!-- .product-bio end -->'+
    //            '</div>'+
    //            '<!-- .product-item end -->'
    //           )} //end_for

    //         if (data_cat=="" || data_cat == null){
    //           $(".scrolldown").empty();
    //           // api_google_books(); //llamanmos a la función que carga los productos recomendados.
    //         } 
    //       }); //end Ajax_done
    //     } //end_if
    //   }//end_if
    // });
         
} //  **********  END SCROLL  ******************


 $(document).ready(function () {
  
   carousel();
   categoria();
   connect_carousel();
   connect_categoria();
   scroll();
 });
