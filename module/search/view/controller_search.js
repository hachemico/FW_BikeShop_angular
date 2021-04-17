function search(){

        $("#form-search").on("keyup", function () {
            
            var auto = $(this).val();///valor de lo que estamos escribiendo 
            if(auto==""){
                $('.searchAuto').empty(); //Evita que aparezcan todos los resultados de la base de datos.
            }else{
                
                var autocom = {auto: auto}; 
                $.ajax({
                    type: "POST",
                    url: "module/search/controller/controller_search.php?op=autocomplete",  
                    dataType: 'JSON',
                    data: autocom,
                })
                .done(function( data, textStatus, jqXHR ) {
                    console.log("DEBUG: Done Autocomplete."); 
                    console.log(data);
                
                    $('.searchAuto').empty();
                    $('.searchAuto').fadeIn(1000);
                    for (row in data) {
                        $('<div></div>').appendTo('.searchAuto').html(
                            data[row].brand +' '+ data[row].model).attr({'class': 'searchElement', 'id': data[row].brand});
                    }
                
                });
            }//end_else
                $(document).on('click', '#search-click', function() {
                    console.log("DEBUG click boton search >>>")
                    $('.autocom').val(this.getAttribute('id'));
                    $('.searchAuto').fadeOut(500);
                    localStorage.setItem('autocom_search',auto);
                    setTimeout('window.location.href ="index.php?page=controller_shop&op=list";',1000);
                });
            
            
                $(document).on('click scroll', function(event) {
                    console.log("DEBUG autocomplete scroll >>>")
                    if (event.target.id !== 'autocom') {
                        $('.searchAuto').fadeOut(500);
                    }
                    localStorage.setItem('autocom_search',auto);
                    setTimeout('window.location.href ="index.php?page=controller_shop&op=list";',1000);   
                });
        });
    }//end_key_up
    
    $(document).ready(function () {
    // search();
    });