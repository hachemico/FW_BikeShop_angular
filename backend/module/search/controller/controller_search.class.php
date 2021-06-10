<?php

class controller_search{

	function autocomplete(){
		echo json_encode( common::loadModel(MODEL_PATH_SEARCH,"search_model", "autocomplete",$_POST['auto'],$_POST['uid']));
		// echo ( common::loadModel(MODEL_PATH_SEARCH,"search_model", "autocomplete",$_POST['auto']));
        //  echo json_encode("Dentro del search_controller");
        //   echo json_encode($_POST['auto']);
	} //end_getshop_function
  
}//end_controller_search_class          
?>