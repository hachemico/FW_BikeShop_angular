<?php
	switch($_GET['page']){
		case "homepage";
			include("module/inicio/view/inicio.php");
			break;
		case "controller_bike";
			include("module/bike/controller/".$_GET['page'].".php");
			break;
		case "controller_home";
			include("module/home/controller/".$_GET['page'].".php");
			break;	
		case "controller_shop";
			include("module/shop/controller/".$_GET['page'].".php");
			break;
		case "controller_shop_detail";
			include("module/shop_detail/controller/".$_GET['page'].".php");
			break;
			case "controller_login";
			include("module/login/controller/".$_GET['page'].".php");
			break;	
		case "services";
			include("module/services/".$_GET['page'].".php");
			break;
		case "aboutus";
			include("module/aboutus/".$_GET['page'].".php");
			break;
		case "contactus";
			include("module/contact/".$_GET['page'].".php");
			break;
		case "404";
			include("view/inc/error".$_GET['page'].".php");
			break;
		case "503";
			include("view/inc/error".$_GET['page'].".php");
			break;
		default;
			include("module/inicio/view/inicio.php");
			break;
	}
?>