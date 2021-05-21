<?php

function validate_php(){
    $daobike = new DAO_bike();
    $rdo = $daobike->find_bike($_POST['idbike']);

    if ($rdo){
        return false;
    }else{
        return true;
    }
}

?>