<?php

class controller_shop{

    // function list(){
	// 	 common::loadView('top_page_shop.php', VIEW_PATH_SHOP . 'shop.html');
	// }

	function getShop(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "getShop",$_POST['user']));
		// echo( common::loadModel(MODEL_PATH_SHOP,"shop_model", "getShop"));
        //  echo json_encode($_POST['user']);
	} //end_getshop_function


	function homeCategories(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCategories",$_POST['value_cat'],$_POST['user']));
		// echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCategories",$_POST['value_cat']));
		//  echo json_encode("Dentro del shop_controller");
	}//end_Homeategoria_function

	function homeCarousel(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "homeCarousel",$_POST['value_car']));
		
	}//end_homeCarousel function

	function countCat(){
		echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "countCat",$_POST['value_countCat']));
	}//end_countCat function

	function countProd(){
		echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "countProd",$_POST['value_id']));;
	}//end_countProd function

	function countPagination(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "countPagination"));
	}//end_countPagination function

	function pagination(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "pagination",$_POST['offset']));
	}//end pagination function

	function filter(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "filter",$_POST['value_filter'],$_POST['user']));
	}//end_filter function

	function search(){
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model", "search",$_POST['value_search']));
		// echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "search",$_POST['value_search']));
        //  echo json_encode("Dentro del search_controller");
        //   echo json_encode($_POST['value_search']);
	} //end_getshop_function

	function controlFav(){
		$id=$_POST['uid'];
		$bike=$_POST['idbike'];
		$unlike=false;

		$rdo = ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "searchFavModel",$id,$bike));
		
		foreach($rdo as $row){
			if($row['favs'] == $bike){
				$unlike=true;
			}
		}
		if($unlike == true){ //Eliminamos idbike from favourites
			// echo(common::loadModel(MODEL_PATH_SHOP,"shop_model", "deleteFavModel",$id,$bike));
			$rdo=common::loadModel(MODEL_PATH_SHOP,"shop_model", "deleteFavModel",$id,$bike);
			if($rdo== true){
			echo json_encode("unlike");	
			}
		}else{ // Añadimos idbike to favourites
			// echo(common::loadModel(MODEL_PATH_SHOP,"shop_model", "saveFavModel",$id,$bike));
			$rdo2=common::loadModel(MODEL_PATH_SHOP,"shop_model", "saveFavModel",$id,$bike);
			if($rdo== true){
				echo json_encode("like");	
				}
		}
			// $rdo3=(common::loadModel(MODEL_PATH_SHOP,"shop_model", "valueBikeModel",$id,$bike));

		// echo json_encode($rdo3);
		// if($unlike==true){
			// echo(common::loadModel(MODEL_PATH_SHOP,"shop_model", "saveFavModel",$id,$bike));
		// }
		// echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "saveFavModel",$_POST['uid'],$_POST['idbike']));
		// echo ( common::loadModel(MODEL_PATH_SHOP,"shop_model", "search",$_POST['value_search']));
        //  echo json_encode("Dentro del search_controller");
        //    echo json_encode($rdo);
		//    echo json_encode($unlike);
	} //end

	function valueBike(){
		// echo json_encode($_POST['idbike']);
		echo json_encode( common::loadModel(MODEL_PATH_SHOP,"shop_model","valueBikeModel",$_POST['uid'],$_POST['idbike']));
	}//end_filter function

}//end_controller_shop_class          
?>