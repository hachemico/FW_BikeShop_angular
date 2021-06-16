<?php
class controller_shopDetail{

    function detail(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOPDETAIL,"shopDetail_model", "detail",$_POST['value_id'],$_POST['user']));
    
	} //end_carousel_function
  function detailNolog(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOPDETAIL,"shopDetail_model", "detailNolog",$_POST['value_id']));
       
	} //end_carousel_function
}