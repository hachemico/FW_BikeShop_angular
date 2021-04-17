<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
    include($path . "/module/bike/model/DAO_bike.php");
    
    
    switch($_GET['op']){
        case 'list';

            try{
                $daobike = new DAO_bike();
                $rdo = $daobike->select_all_bike();
                // print_r($rdo);
                // die;
            }catch (Exception $e){
                // print_r("Debug 503 falla DAO_1");
                // die;

                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            
            if(!$rdo){
                // print_r("Debug 503 falla DAO_2");
                // die
    			$callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
                include("module/bike/view/list_bike.php");
    		}
            break;
            
        case 'create';

        $error_idbike="";
        $error_brand="";
        $error_model="";
        $error_category="";
        $error_year="";
        $error_wheel_size="";
        $error_date_in="";
        $error_comment="";
    
            
        include("module/bike/model/validate_bike.php");
            
            if ($_POST){

                $check=validate_php();
                
                if ($check){
                    
                    try{
                        $daobike = new DAO_bike();
    		            $rdo = $daobike->insert_bike($_POST);
                    }catch (Exception $e){
                        $callback = 'index.php?page=503';
        			    die('<script>window.location.href="'.$callback .'";</script>');
                    }
                    
		            if($rdo){
            			echo '<script language="javascript">alert("Registrado en la base de datos correctamente")</script>';
            			$callback = 'index.php?page=controller_bike&op=list';
        			    die('<script>window.location.href="'.$callback .'";</script>');
            		}else{
            			$callback = 'index.php?page=503';
    			        die('<script>window.location.href="'.$callback .'";</script>');
            		}
                }else{
                $error_idbike="La referencia coicide con otra bicicleta";
                }
            }
            include("module/bike/view/create_bike.php");
            break;
            
        case 'update';
            include("module/bike/model/validate_update.php");
            
            $error_idbike="";
            $error_brand="";
            $error_model="";
            $error_category="";
            $error_year="";
            $error_wheel_size="";
            $error_date_in="";
            $error_comment="";
            
            
            if ($_POST){
                
                $check=validate_php_update();
            
                if ($check){
                  //  print_r("Debug update check + die");
                   //die;

                    try{
                        $daobike = new DAO_bike();
    		            $rdo = $daobike->update_bike($_POST);
                    }catch (Exception $e){
                        $callback = 'index.php?page=503';
        			    die('<script>window.location.href="'.$callback .'";</script>');
                    }
                    
		            if($rdo){
                        echo '<script language="javascript">alert("Actualizado en la base de datos correctamente")</script>';
                    
            			$callback = 'index.php?page=controller_bike&op=list';
        			    die('<script>window.location.href="'.$callback .'";</script>');
            		}else{

                        print_r("no guarda");
            			$callback = 'index.php?page=503';
    			        die('<script>window.location.href="'.$callback .'";</script>');
            		}
               }else{

                $error_idbike=("La bicicleta no existe, no puede actualizar sus datos");

               }
            }else{// else añadido ultimo

              
                try{
                    $daobike = new DAO_bike();
            	    $rdo = $daobike->select_bike($_GET['id']);
            	    $idbike=get_object_vars($rdo);
                }catch (Exception $e){
                    $callback = 'index.php?page=503';
			        die('<script>window.location.href="'.$callback .'";</script>');
                }
            
                if(!$rdo){
    			    $callback = 'index.php?page=503';
    			    die('<script>window.location.href="'.$callback .'";</script>');
            
                }else{
                    
        	        include("module/bike/view/update_bike.php");
                }
            }//else añadido ultimo
                break;
            
        // case 'read';

        //     try{
        //         $daobike = new DAO_bike();
        //     	$rdo = $daobike->select_bike($_GET['id']);
        //     	$idbike=get_object_vars($rdo);
        //     }catch (Exception $e){
        //         $callback = 'index.php?page=503';
		// 	    die('<script>window.location.href="'.$callback .'";</script>');
        //     }
        //     if(!$rdo){
    	// 		$callback = 'index.php?page=503';
    	// 		die('<script>window.location.href="'.$callback .'";</script>');
    	// 	}else{
        //         include("module/bike/view/read_bike.php");
    	// 	}
        //     break;
            
        case 'delete';
       

         if ($_POST){

            try{
                    $daobike = new DAO_bike();
                	$rdo = $daobike->delete_bike($_GET['id']);
                }catch (Exception $e){
                    $callback = 'index.php?page=503';
    			    die('<script>window.location.href="'.$callback .'";</script>');
                }
            	
            	if($rdo){
        			echo '<script language="javascript">alert("Borrado en la base de datos correctamente")</script>';
        			$callback = 'index.php?page=controller_bike&op=list';
    			    die('<script>window.location.href="'.$callback .'";</script>');
        		}else{
        			$callback = 'index.php?page=503';
			        die('<script>window.location.href="'.$callback .'";</script>');
        		}
            
            
            }else{

            try{
                    $daobike = new DAO_bike();
                    $rdo = $daobike->select_bike($_GET['id']);
                    $idbike=get_object_vars($rdo);
                    }catch (Exception $e){
                        $callback = 'index.php?page=503';
                    die('<script>window.location.href="'.$callback .'";</script>');
                    }
                    if(!$rdo){
                    	$callback = 'index.php?page=503';
                    die('<script>window.location.href="'.$callback .'";</script>');
                    
                    }else{
                         include("module/bike/view/delete_bike.php");
                    }
              
            break;
            }
        
            case 'deletall';
            
            if($_POST){
               
                try{
                    $daobike = new DAO_bike();
                	$rdo = $daobike->delete_allbike();
                }catch (Exception $e){
                    $callback = 'index.php?page=503';
    			    die('<script>window.location.href="'.$callback .'";</script>');
                }
            	
            	if($rdo){
        			echo '<script language="javascript">alert("Borrado en la base de datos correctamente")</script>';
        			$callback = 'index.php?page=controller_bike&op=list';
    			    die('<script>window.location.href="'.$callback .'";</script>');
        		}else{
        			$callback = 'index.php?page=503';
			        die('<script>window.location.href="'.$callback .'";</script>');
        		}
            
            }else{
            include("module/bike/view/delete_allbike.php");
            break;
            }

            default;
            include("view/inc/error404.php");
            break;


           case 'read_modal';
             
        //    console.log("dentro del read modal");

        //    echo("Debug read modal");
        //    echo $_GET['modal'];
                
           try{
               $daobike = new DAO_bike();
               $rdo = $daobike->select_bike($_GET['modal']);
           }catch (Exception $e){
               echo json_encode("error");
               exit;
           }
           if(!$rdo){
               echo json_encode("error");
               exit;
           }else{
               $idbike=get_object_vars($rdo);
               echo json_encode($idbike);
            //    echo json_encode("DEBUG CONTROLLER_BIKE_MODAL");
               exit;
           }
           break;
              
       

        } //end_if_op
            
              
?>