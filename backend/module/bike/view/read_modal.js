$(document).ready(function () {
    
    // $('#datatable').DataTable();

    $('.Button_blue').on("click", function(){

        console.log("dentro del ready");
        var id = this.getAttribute('id');
       // console.log(id);
        //alert(id);

        $.ajax({
            //data: {"parametro1" : "valor1"},
            type: "GET",
            dataType: "json",
            url: "module/bike/controller/controller_bike.php?op=read_modal&modal=" + id,
        })
         .done(function( data) {
                
           // console.log("DEBUG dentro AjaxDONE");
            
            $('#bike_modal').empty();
            //$('#contenido').empty();
            $('<div></div>').attr('id','Div1').appendTo('#bike_modal');
         
                 $("#Div1").html(
                            '<br><span>Id Bike:         <span id="idbike">'+data.idbike+'</span></span></br>'+
                            '<br><span>Marca:           <span id="brand">'+data.brand+'</span></span></br>'+
                            '<br><span>Modelo:          <span id="model">'+data.model+'</span></span></br>'+
                            '<br><span>Categoria:       <span id="category">'+data.category+'</span></span></br>'+
                            '<br><span>Año:             <span id="year">'+data.year+'</span></span></br>'+
                            '<br><span>Tamaño Rueda:    <span id="wheel_size">'+data.wheel_size+'</span></span></br>'+
                            '<br><span>Fecha Entrada:   <span id="date_in">'+data.date_in+'</span></span></br>'+
                            '<br><span>Comentario:      <span id="comment">'+data.comment+'</span></span></br>'
                          
                            )
                 $("#bike_modal").dialog({
                    width: 850, //<!-- ------------- ancho de la ventana -->
                    height: 500, //<!--  ------------- altura de la ventana -->
                    //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
                    //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
                    resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
                    position: "down",//<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
                    modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");
                        }
                    },
                    show: {
                        effect: "blind",
                        duration: 1000
                    },
                    hide: {
                        effect: "explode",
                        duration: 1000
                    }
                });

              // modal(data.nombre);
         })
         .fail(function( jqXHR, textStatus, errorThrown ) {
             if ( console && console.log ) {
                 console.log( "La solicitud ha fallado: " +  textStatus);
             }
        });
    });
    
   $('#datatable').DataTable();

   
 });
