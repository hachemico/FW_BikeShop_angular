<?php
   $path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
   include($path . "/model/connect.php");
    
	class DAO_bike{

		function insert_bike($datos){
			$idbike=$datos[idbike];
        	$brand=$datos[brand];
			$model=$datos[model];
			$category=$datos[category];
			$year=$datos[year];
			$wheel_size=$datos[wheelsize];
			$date_in=$datos[date_in];
			$comment=$datos[comment];
			
			
        	$sql = " INSERT INTO bike (idbike, brand, model, category, year , wheel_size, date_in, comment)"
        		. " VALUES ('$idbike','$brand', '$model', '$category', '$year', '$wheel_size', '$date_in', '$comment')";
            
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
			return $res;
		}

		function delete_bike($idbike){
			$sql = "DELETE FROM bike WHERE idbike='$idbike'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
			return $res;
			
		}
		function delete_allbike(){
			$sql = "DELETE * FROM bike";
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}

		function find_bike($idbike){
			$sql = "SELECT * FROM bike WHERE idbike='$idbike'";
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
			connect::close($conexion);
			return $res;
		
		}
		
			function select_all_bike(){
			$sql = "SELECT * FROM bike";
			//$sql = "SELECT * FROM bike ORDER BY idbike ASC";
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}
		
		function select_bike($idbike){
			$sql = "SELECT * FROM bike WHERE idbike='$idbike'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
		}

		
		
		function update_bike($datos){

        	$idbike=$datos['idbike'];
        	$brand=$datos['brand'];
        	$model=$datos['model'];
			$category=$datos['category'];
			$date_in=$datos['date_in'];
			$year=$datos['year'];
			$wheel_size=$datos['wheel_size'];
        	$date_in=$datos['date_in'];
			$comment=$datos['comment'];

        	$sql = " UPDATE bike SET brand='$brand', model='$model', category='$category',date_in='$date_in', year='$year',
			 wheel_size='$wheel_size', date_in='$date_in', comment='$comment' WHERE idbike='$idbike'";

				// $sql = " UPDATE bike SET brand='$brand', model='$model', category='$category', year='$year',"
				// . " wheel_size='$wheel_size', date_in='$date_in', comment='$commment' WHERE idbike='$idbike'";

            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
			return $res;
		}
		

	}