<?php
class controller_home{
    
    // function list(){
	// 	common::loadView("top_page_home.php", VIEW_PATH_HOME . "home.html");
	// }

	function carousel(){
		echo json_encode( common::loadModel(MODEL_PATH_HOME,"home_model", "carousel"));
		// echo ("Hola");
	} //end_carousel_function


	function categories(){
		echo json_encode( common::loadModel(MODEL_PATH_HOME,"home_model", "categories"));

	}//end_categoria_function

	function countCategories(){
		echo json_encode( common::loadModel(MODEL_PATH_HOME,"home_model", "countCategories"));
	}//end_count_categories

	function moreCategories(){
		 echo json_encode( common::loadModel(MODEL_PATH_HOME,"home_model", "moreCategories",$_POST['offset']));
	}//end_moreCategories

}//end_controller_home_class          
?>