<?php
class controller_home{

    // $path = $_SERVER['DOCUMENT_ROOT'] . '/FW_BikeShop';
    // include($path . "/module/home/model/DAO_home.php");
    //  echo("carga DAOHOME");
    
    function list(){

		common::loadView('top_page_home.php', VIEW_PATH_HOME . 'home.html');

	}

	function carousel(){
		echo common::accessModel('home_model', 'carousel_home') -> getResolve();
		// echo json_encode("Dentro del carousel");
	
		// try{
		// 	$daohome = new DAO_home();
		// 	$rdo = $daohome->select_carousel();   

		// } catch(Exception $e){
		// 	echo json_encode("error");
		// }

		// if(!$rdo){
		// 	echo json_encode("error");
		// }
		// else{
			
		// 	$dinfo = array();
		// 	foreach ($rdo as $row) {
		// 	array_push($dinfo, $row);
		// 	}
		// 	echo json_encode($dinfo);
		//    // echo json_encode("view\img\slide\slider_1.jpg");
		// }
		
	} //end_carousel_function


	function categoria(){
		echo common::accessModel('home_model', 'getCategories_home',[$_POST['loaded'], $_POST['items']]) -> getResolve();
		// try{
		// 	$daocategoria = new DAO_home();
		// 	$rdo = $daocategoria->select_categoria();
	  

		// } catch(Exception $e){
		// 	echo json_encode("error");
		// }

		// if(!$rdo){
		// 	echo json_encode("error");
		// }
		// else{
			
		// 	$dinfo = array();
		// 	foreach ($rdo as $row) {
		// 	array_push($dinfo, $row);
		// 	}
		// 	 echo json_encode($dinfo);
		//   //  echo json_encode("view/img/slide/slider_1.jpg");

		// }

	}//end_categoria_function

	function count_categories(){

		function incrementView() {
			echo common::accessModel('home_model', 'IncView_home', $_POST['brand']);
		}// end_incrementView

		// try{
		// 	$daocategorias = new DAO_home();
		// 	$rdo = $daocategorias->select_countcat();

		// } catch(Exception $e){
		// 	echo json_encode("error");
		// }

		// if(!$rdo){
		// 	echo json_encode("error");
		// }
		// else{
		//   $dinfo = array();
		//   foreach ($rdo as $row) {
		//   array_push($dinfo, $row);
		//   }
		//   echo json_encode($dinfo);
		// } 

	}//end_count_categories

	function more_categories(){

		try{
			$daocategorias = new DAO_home();
			$rdo = $daocategorias->select_morecat($_GET['scroll']);

		} catch(Exception $e){
			echo json_encode("error");
		}

		if(!$rdo){
			echo json_encode("error");
		}
		else{

			$dinfo = array();
			foreach ($rdo as $row) {
			array_push($dinfo, $row);
			}
			echo json_encode($dinfo);
		} 
	}
}//end_controller_contact_class
    // switch($_GET['op']){
    //     case 'list';
	// 		include("module/home/view/home.html");
    //     break;

    //     case 'carousel';
        
    //         try{
	// 			$daohome = new DAO_home();
    //             $rdo = $daohome->select_carousel();   

	// 		} catch(Exception $e){
	// 			echo json_encode("error");
    //         }

	// 		if(!$rdo){
	// 			echo json_encode("error");
	// 		}
	// 		else{
				
	// 			$dinfo = array();
	// 			foreach ($rdo as $row) {
	// 			array_push($dinfo, $row);
	// 			}
	// 			echo json_encode($dinfo);
    //            // echo json_encode("view\img\slide\slider_1.jpg");
	// 		}
				
	// 		break;  


	// 	case 'categoria';
			 
	// 		  try{
	// 			  $daocategoria = new DAO_home();
	// 			  $rdo = $daocategoria->select_categoria();
			

	// 		  } catch(Exception $e){
	// 			  echo json_encode("error");
	// 		  }
  
	// 		  if(!$rdo){
	// 			  echo json_encode("error");
	// 		  }
	// 		  else{
				  
	// 			  $dinfo = array();
	// 			  foreach ($rdo as $row) {
	// 			  array_push($dinfo, $row);
	// 			  }
	// 			   echo json_encode($dinfo);
	// 			//  echo json_encode("view/img/slide/slider_1.jpg");

	// 		  }
				  
	// 		  break;

	// 		  case 'count_categories';

	// 		  try{
	// 			  $daocategorias = new DAO_home();
	// 			  $rdo = $daocategorias->select_countcat();

	// 		  } catch(Exception $e){
	// 			  echo json_encode("error");
	// 		  }
  
	// 		  if(!$rdo){
	// 			  echo json_encode("error");
	// 		  }
	// 		  else{
	// 			$dinfo = array();
	// 			foreach ($rdo as $row) {
	// 			array_push($dinfo, $row);
	// 			}
	// 			echo json_encode($dinfo);
	// 		  } 
	// 		  break;

	// 		  case 'more_categories';

	// 		  try{
	// 			  $daocategorias = new DAO_home();
	// 			  $rdo = $daocategorias->select_morecat($_GET['scroll']);

	// 		  } catch(Exception $e){
	// 			  echo json_encode("error");
	// 		  }
  
	// 		  if(!$rdo){
	// 			  echo json_encode("error");
	// 		  }
	// 		  else{

	// 			  $dinfo = array();
	// 			  foreach ($rdo as $row) {
	// 			  array_push($dinfo, $row);
	// 			  }
	// 			  echo json_encode($dinfo);
	// 		  } 
	// 		  break;


	// 	 	default:
	// 		  include("view/inc/error404.html");
	// 		break;
			 
	//  } //end_if_op            
?>