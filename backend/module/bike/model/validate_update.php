<?php
function validate_php_update(){
    $daobike = new DAO_bike();
    $rdo = $daobike->find_bike($_POST['idbike']);

    if ($rdo){
        return true;
    }else{
        return false;
    }
}
?>