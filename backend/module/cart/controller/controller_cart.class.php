<?php
class controller_cart{
    
	function insertLine(){

		$id=$_POST['uid'];
		$bike=$_POST['idBike'];
		$rdo = common::loadModel(MODEL_PATH_CART,"cart_model", "searchLine_model",$id,$bike); //buscamos existencia producto/cart
		if($rdo){
			if($rdo[0]['qty']>= $rdo[0]['stock']){ //limitamos la cantidad demandada por el cliente con el stock Max.
				echo ("StockMax");

			}else{
				$rdo2= common::loadModel(MODEL_PATH_CART,"cart_model", "updateLine_model",$_POST['uid'],$_POST['idBike']); //aumenta qty
				echo json_encode( common::loadModel(MODEL_PATH_CART,"cart_model", "totalLine_model",$_POST['uid']));
			}
			
		}else if(!$rdo){
		// 	// echo json_encode("yupi!");
			$rdo3= common::loadModel(MODEL_PATH_CART,"cart_model", "insertLine_model",$_POST['uid'],$_POST['idBike']); // introduce producto/cart
			echo json_encode( common::loadModel(MODEL_PATH_CART,"cart_model", "totalLine_model",$_POST['uid']));
		}	
	}

	function searchCart(){
		echo json_encode(common::loadModel(MODEL_PATH_CART,"cart_model", "searchCart_model",$_POST['uid']));
	}

	function incrementCart(){
		$id=$_POST['uid'];
		$bike=$_POST['idBike'];

		$rdo= common::loadModel(MODEL_PATH_CART,"cart_model", "incrementCart_model",$id,$bike);
		if ($rdo == true){
		echo json_encode( common::loadModel(MODEL_PATH_CART,"cart_model", "searchCart_model",$id,$bike));
		}
	}
	function decrementCart(){

		$id=$_POST['uid'];
		$bike=$_POST['idBike'];

		$rdo= common::loadModel(MODEL_PATH_CART,"cart_model", "decrementCart_model",$id,$bike);
		if ($rdo == true){
		echo json_encode( common::loadModel(MODEL_PATH_CART,"cart_model", "searchCart_model",$id,$bike));
		}
	}

	function deleteLineCart(){
		$id=$_POST['uid'];
		$bike=$_POST['idBike'];

		$rdo= common::loadModel(MODEL_PATH_CART,"cart_model", "deleteLineCart_model",$id,$bike);
		if($rdo){
			echo json_encode(common::loadModel(MODEL_PATH_CART,"cart_model", "searchCart_model",$_POST['uid']));
		}
	}

	function totalLine(){

		echo json_encode( common::loadModel(MODEL_PATH_CART,"cart_model", "totalLine_model",$_POST['uid']));
	}

//CHECKOUT
function controlCheckout(){

	$rdo= common::loadModel(MODEL_PATH_CART,"cart_model", "insertCheckout_model",$_POST['uid']);
	$rdo2= common::loadModel(MODEL_PATH_CART,"cart_model", "deleteFromCart_model",$_POST['uid']);
}
//FUNCTIONS NOLOG
function searchLineNolog(){

	$bike=$_POST['idBike'];
	$rdo = common::loadModel(MODEL_PATH_CART,"cart_model", "searchLineNolog_model",$bike); //buscamos existencia producto	
	echo json_encode($rdo);
}
function searchCartNolog(){

	echo json_encode(common::loadModel(MODEL_PATH_CART,"cart_model", "searchCartNolog_model",$_POST['query'])); //buscamos existencia producto	

}
function CheckoutNolog(){
	echo json_encode(common::loadModel(MODEL_PATH_CART,"cart_model", "insertLineNolog_model",$_POST['query']));
}
}//end_controller_cart_class          
?>