<?php
class controller_shopDetail{

    // function list(){
    //     common::loadView('top_page_shop_detail.php', VIEW_PATH_SHOPDETAIL . 'shop_detail.html');
    //     // echo json_encode("Dentro del shop detail");
    // }
    function detail(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOPDETAIL,"shopDetail_model", "detail",$_POST['value_id']));
        // echo( common::loadModel(MODEL_PATH_SHOPDETAIL,"shopDetail_model", "detail", $_POST['id']));
        //  echo json_encode("Dentro del shopDetail_controller");
        //  echo json_encode($a);
	} //end_carousel_function
}