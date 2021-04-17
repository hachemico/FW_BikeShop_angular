<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
    include($path . "/module/shop_detail/model/DAO_shop_detail.php");

    
    switch($_GET['op']){
        
        case 'list';
			include("module/shop_detail/view/shop_detail.html");
        break;
        
        
        case 'detail';

        try{
            $daoshop = new DAO_shop_detail();
            $rdo = $daoshop->select_shop_detail($_GET['id']);
       
        } catch(Exception $e){
            echo json_encode("error");
        }

        if(!$rdo){
            echo json_encode("error");
        }
        else{
            echo json_encode($rdo);
            //  echo json_encode("HOLA PEPE");
  
           
        }
            
        break;

        default:
        include("view/inc/error404.php");
        break;
    } //end_if_op            
?>