<?php
//////
// define ('PROJECT', '/FW_BikeShop/'); // Project Path
// define ('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT); // Site Root

define ('PROJECT', '/FW_BikeShop_angular/backend/'); // Project Path

define ('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . PROJECT); // Site Path
define ('CSS_PATH', SITE_PATH . 'view/css/'); // Css Path
define ('JS_PATH', SITE_PATH . 'view/js/'); // JS Path
define ('IMG_PATH', SITE_PATH . 'view/img/'); // IMG Path
define ('VIEW_PATH', SITE_PATH . 'view/'); // View Path
define ('VIEW_INC_PATH', SITE_PATH . 'view/inc/'); // View Path RSplugin
define('VENDOR_PATH', SITE_PATH . 'view/js/vendor/');

define ('PRODUCTION', true);

define ('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT); // Site Root
define ('MODEL_PATH', SITE_ROOT . 'model/'); // Model Path
define ('MODULES_PATH', SITE_ROOT . 'module/'); // Modules Path
define ('VIEW_PATH_INC', SITE_ROOT . 'view/inc/'); // View Path Inc
define ('RESOURCES', SITE_ROOT . 'resources/'); // Resources Path
define ('UTILS', SITE_ROOT . 'utils/'); // Utils Path

// Contact
define ('MODEL_PATH_CONTACT', SITE_ROOT . 'module/contact/model/');
define ('VIEW_PATH_CONTACT', SITE_ROOT . 'module/contact/view/');

define ('JS_PATH_CONTACT', SITE_PATH . 'module/contact/model/');

//Home                        
define ('MODEL_PATH_HOME', SITE_ROOT . 'module/home/model/model/');
define ('VIEW_PATH_HOME', SITE_ROOT . 'module/home/view/');
define('DAO_HOME', SITE_ROOT . 'module/home/model/DAO/');
define('BLL_HOME', SITE_ROOT . 'module/home/model/BLL/');
    
define ('JS_PATH_HOME', SITE_PATH . 'module/home/model/model/');

//Shop
define ('MODEL_PATH_SHOP', SITE_ROOT . 'module/shop/model/model/');
define ('VIEW_PATH_SHOP', SITE_ROOT . 'module/shop/view/');

define ('JS_PATH_SHOP', SITE_PATH . 'module/shop/model/');


// //Shop Detail
define ('MODEL_PATH_SHOPDETAIL', SITE_ROOT . '/module/shopDetail/model/model/');
define ('VIEW_PATH_SHOPDETAIL', SITE_ROOT . 'module/shopDetail/view/');

define ('JS_PATH_SHOPDETAIL', SITE_PATH . 'module/shopDetail/view/');

// //Search
define ('MODEL_PATH_SEARCH', SITE_ROOT . '/module/search/model/model/');
define ('JS_PATH_SEARCH', SITE_PATH . 'module/search/view/');

// //Login
define('VIEW_PATH_LOGIN', SITE_ROOT . 'module/login/view/');
define ('MODEL_PATH_LOGIN', SITE_ROOT . '/module/login/model/model/');

define ('JS_PATH_LOGIN', SITE_PATH . 'module/login/model/');

// //Cart
// define('VIEW_PATH_CART', SITE_ROOT . 'module/cart/view/');
// define ('MODEL_PATH_CART', SITE_ROOT . '/module/cart/model/model/');

// //Profile
// define('VIEW_PATH_PROFILE', SITE_ROOT . 'module/profile/view/');
// define ('MODEL_PATH_PROFILE', SITE_ROOT . '/module/profile/model/model/');

//Friendly
define('URL_AMIGABLES', TRUE);

// if ($_GET['op'] == 'get') {
//     echo json_encode(URL_FRIENDLY);
// }