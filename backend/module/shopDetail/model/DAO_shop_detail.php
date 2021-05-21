<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
    include($path . "/model/connect.php");
    
	class DAO_shop_detail{
		function select_shop_detail($id){
			$sql = "SELECT * FROM bike WHERE idbike= '$id' ";
			$connection = connect::con();
			// $res = mysqli_query($connection, $sql);
			$res = mysqli_query($connection, $sql)->fetch_object();
			connect::close($connection);
			return $res;
		}
		
	}
?>