console.log("Carga controller_search.js");

function search(){
    console.log("DEntro del search");
        $(".form-control").on("keyup", function () {
            console.log("DEntro del keyup");
            var auto = $(this).val();///valor de lo que estamos escribiendo 
            
            if(auto==""){
                $('.searchAuto').empty(); //Evita que aparezcan todos los resultados de la base de datos.
            }else{
                var autocom = {auto: auto}; 
                ajaxPromise(
                    amigable("?module=search&function=autocomplete"),
                    "POST",
                    "JSON",
                    autocom
                  )
                    .then(function (data) {
                     
                        // console.log("Autocomplete>>"+data);
                        $('.searchAuto').empty();
                        $('.searchAuto').fadeIn(1000);
                        for (row in data) {
                            $('<div></div>').appendTo('.searchAuto').html(
                                data[row].brand +' '+ data[row].model).attr({'class': 'searchElement', 'id': data[row].brand});
                        }
                    })
                    .catch(function () {
                      console.log("Error Ajaxpromise Autocomplete");
                    });
            }//end_else

                $(document).on('click', '#search_button', function() {
                    console.log("DEBUG click boton search >>>")
                    $('.autocom').val(this.getAttribute('id'));
                    $('.searchAuto').fadeOut(500);
                    localStorage.setItem('autocom_search',auto);
                    
                    window.location.href =amigable("?module=shop&function=list");
                });
            
            
                $(document).on('click scroll', function(event) {
                    console.log("DEBUG autocomplete scroll >>>")
                    if (event.target.id !== 'autocom') {
                        $('.searchAuto').fadeOut(500);
                    }
                    localStorage.setItem('autocom_search',auto);
                    window.location.href =amigable("?module=shop&function=list");   
                });
        });
    }//end_key_up
    
    $(document).ready(function () {
    search();
    });