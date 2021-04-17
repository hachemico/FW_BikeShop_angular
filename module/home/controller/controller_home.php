<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
    include($path . "/module/home/model/DAO_home.php");
    //  echo("carga DAOHOME");
    
    
    switch($_GET['op']){
        case 'list';
			include("module/home/view/home.html");
        break;

        case 'carousel';
        
            try{
				$daohome = new DAO_home();
                $rdo = $daohome->select_carousel();   

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
               // echo json_encode("view\img\slide\slider_1.jpg");
			}
				
			break;  


		case 'categoria';
			 
			  try{
				  $daocategoria = new DAO_home();
				  $rdo = $daocategoria->select_categoria();
			

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
				//  echo json_encode("view/img/slide/slider_1.jpg");

			  }
				  
			  break;

			  case 'count_categories';

			  try{
				  $daocategorias = new DAO_home();
				  $rdo = $daocategorias->select_countcat();

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
			  break;

			  case 'more_categories';

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
			  break;


		 	default:
			  include("view/inc/error404.html");
			break;
			 
	 } //end_if_op            
?>