function validate_idbike(texto){
    if (texto.length > 0){
        var reg=/^[0-9]{3}$/;
        return reg.test(texto);
    }
    return false;
}
function validate_brand(texto){
    if (texto.length > 0){
        var reg=/^[a-zA-Z]*$/;
        return reg.test(texto);
    }
    return false;
}
function validate_model(texto){
    if (texto.length > 0){
        var reg=/^[a-zA-Z]*$/;
        return reg.test(texto);
    }
    return false;
}
function validate_category(array){
    return true;
}

function validate_year(texto){
    if (texto.length > 0){
        var reg=/^[0-9]{4}$/;
        return reg.test(texto);
    }
    return false;
}

function validate_wheel_size(texto){
    var i;
    var ok=0;
    for(i=0; i<texto.length;i++){
        if(texto[i].checked){
            ok=1
        }
    }
 
    if(ok==1){
        return true;
    }
    if(ok==0){
        return false;
    }
}


function validate_date_in(array){
    
    return true;
}

function validate_comment(texto){
    if (texto.length > 0){
        return true;
    }
    return false;
}


function validate_update(){
   
    
    var v_idbike=document.getElementById('idbike').value;
    var v_brand=document.getElementById('brand').value;
    var v_model=document.getElementById('model').value;
    var v_category=document.getElementById('category').value;
    var v_year=document.getElementById('year').value;
    var v_wheel_size=document.getElementsByName('wheel_size');
    var v_date_in=document.getElementById('date_in');
    var v_comment=document.getElementById('comment').value;
    
    
    var r_idbike=validate_idbike(v_idbike);
    var r_brand=validate_brand(v_brand);
    var r_model=validate_model(v_model);
    var r_category=validate_category(v_category);
    var r_year=validate_year(v_year);
    var r_wheel_size=validate_wheel_size(v_wheel_size);
    var r_date_in=validate_date_in(v_date_in);
    var r_comment=validate_comment(v_comment);
    
    if(!r_idbike){
        document.getElementById('error_idbike').innerHTML = " La referencia introducida no es valida";
        document.alta_bike.idbike.focus();
        return 0;
        
    }else{
        document.getElementById('error_idbike').innerHTML = "";
    }
    if(!r_brand){
        document.getElementById('error_brand').innerHTML = " * La Marca introducida no es valida";
        document.alta_bike.brand.focus();
        return 0;
    }else{
        document.getElementById('error_brand').innerHTML = "";
    }
    if(!r_model){
        document.getElementById('error_model').innerHTML = " * El Modelo introducido no es valido";
        document.alta_bike.model.focus();
        return 0;
    }else{
        document.getElementById('error_model').innerHTML = "";
    }
    if(!r_category){
        document.getElementById('error_category').innerHTML = " * Selecciona una categoria";
        document.alta_bike.category.focus();
        return 0;
    }else{
        document.getElementById('error_category').innerHTML = "";
    }
    if(!r_year){
        document.getElementById('error_year').innerHTML = " * No has introducido año correspondiente";
        document.alta_bike.year.focus();
        return 0;
    }else{
        document.getElementById('error_year').innerHTML = "";
    }
    if(!r_wheel_size){
        document.getElementById('error_wheel_size').innerHTML = " * No has seleccionado ningun tamaño de rueda";
        document.alta_bike.wheel_size.focus();
        return 0;
    }else{
        document.getElementById('error_wheel_size').innerHTML = "";
    }
    if(!r_date_in){
        document.getElementById('error_date_in').innerHTML = " * No has seleccionado ninguna fecha entrada";
        document.alta_bike.date_in.focus();
        return 0;
    }else{
        document.getElementById('error_date_in').innerHTML = "";
    }
    if(!r_comment){
        document.getElementById('error_comment').innerHTML = " * El texto introducido no es valido";
        document.alta_bike.comment.focus();
        return 0;
    }else{
        document.getElementById('error_comment').innerHTML = "";
    }
   
    document.update_bike.submit();
    document.update_bike.action="index.php?page=controller_bike&op=update";
     
}