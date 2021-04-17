<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
    include($path . "/model/connect.php");
    
	class DAO_shop{
		function select_shop(){
			$sql = "SELECT * FROM bike ORDER BY more_visited DESC LIMIT 6";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_single($id){
			$sql = "SELECT * FROM bike WHERE idbike='$id'";
			$connection = connect::con();
			// $res = mysqli_query($connection, $sql);
			$res = mysqli_query($connection, $sql)->fetch_object();
			connect::close($connection);
			return $res;
		}
		function select_categoria($categoria){
			$sql = "SELECT * FROM bike WHERE category='$categoria'";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_carousel($carousel){
			$sql = "SELECT * FROM bike WHERE category='$carousel'";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_filter($checks){
			$sql = "SELECT * FROM bike WHERE $checks ";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_search($forsearch){
			 $sql = "SELECT * FROM bike WHERE brand LIKE '".$forsearch."%'";
			// $sql = "SELECT * FROM bike WHERE brand LIKE 'mo%'";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_count_cat($category){
			$sql = "UPDATE categoria SET more_visited = (more_visited+1) WHERE categoria = '$category' ";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_count_prod($id){
			$sql = "UPDATE bike SET more_visited = (more_visited+1) WHERE idbike = '$id' ";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_count_all(){
			$sql = "SELECT brand FROM bike";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}

		function select_pagination($offset){
			$sql = "SELECT * FROM bike ORDER BY more_visited DESC LIMIT 6 OFFSET $offset";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function select_user_favs($user_email){ //seleccionamos el usuario
           
            $sql = "SELECT name, type, email, avatar FROM user WHERE email=$user_email";
            $connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;


			return $aux1;
		}//end_valide_user

		function insert_user_favs($id_bike_fav,$user_fav){ //seleccionamos el usuario
            $aux1=$id_bike_fav;
			$aux2=$user_fav;
            $sql = "INSERT INTO user_product(email_user, id_bike, aux) VALUES ('$user_fav','$id_bike_fav','')";
			// INSERT INTO user_product(email_user, id_bike, aux) VALUES ('hachemico@gmail.com','003','');
            $connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;

			// return $aux2;
		}//end_valide_user
	}
?>