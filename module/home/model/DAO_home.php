<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
    include($path . "/model/connect.php");
    
	class DAO_home{
		function select_carousel(){
			$sql = "SELECT * FROM img_slider ORDER BY nombre ASC";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_categoria(){
			$sql = "SELECT * FROM categoria ORDER BY more_visited DESC LIMIT 4 ";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_countcat(){
			$sql = "SELECT COUNT(*) AS count FROM categoria ";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_morecat($scroll){
			$sql = "SELECT * FROM categoria ORDER BY more_visited DESC LIMIT 4 OFFSET $scroll ";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
	}

	
?>