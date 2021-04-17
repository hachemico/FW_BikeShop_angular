<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
    include($path . "/module/search/model/DAO_search.php");
 
        switch($_GET['op']){
            
            case 'autocomplete':
                    try{
                        $DAOsearch = new DAO_search();
                        $rdo = $DAOsearch->autocomplete();
                    }catch (Exception $e){
                        echo json_encode("error");
                        exit;
                    }
                    if(!$rdo){
                        echo json_encode("error");
                        exit;
                    }else{
                        $dinfo = array();
                        foreach ($rdo as $row) {
                            array_push($dinfo, $row);
                        }
                        echo json_encode($dinfo);
                    }
                    break;
            default:
                include("view/inc/error/error404.php");
                break;
        }
?>