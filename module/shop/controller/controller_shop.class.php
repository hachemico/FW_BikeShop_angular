<?php

class controller_shop{

    function list(){
		 common::loadView('top_page_shop.php', VIEW_PATH_SHOP . 'shop.html');
	}

	function getShop(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "getShop"));
		// echo( common::loadModel(MODEL_PATH_SHOP,"shop_model", "getShop"));
        //  echo json_encode("Dentro del shop_controller");
	} //end_carousel_function


	function homeCategories(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCategories",$_POST['value_cat']));
		// echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCategories",$_POST['value_cat']));
		//  echo json_encode("Dentro del shop_controller");
	}//end_categoria_function

	function homeCarousel(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCarousel",$_POST['value_car']));
		// echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCarousel"));
		//  echo json_encode("Dentro del shop_controller");
	}//end_count_categories

	function search(){
		// echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCarousel",$_POST['value_car']));
		// echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCarousel"));
		 echo json_encode("");
	}//end_count_categories

}//end_controller_shop_class          
?>