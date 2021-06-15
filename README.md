<H1>FW_BIKESHOP_PHPFramework_AngularJS | RIDE BIKE</H1>

<H4> INDEX </H4>
<hr weight=600>
<ul>
    <li> Conoce el proyecto</li>
    <li> Características </li>
    <li>Tecnologías empleadas </li>
</ul>

<H4> Conoce el proyecto </H4>
<hr weight=600>
<p> Este proyecto ha sido desarrollado durante el 3er trimestre, del 1er curso Formación Profesional Grado Superior de "Desarrollo de aplicaciones web" en IES L'ESTACIO - ONTINYENT . 
Se trata de una aplicacíon web desarrollada bajo:
    <br>
   <li> Backend: inicialmente basado en PHP_OO_MVC, migrado a framework PHP.  </li>
   <li> Frontend : inicialmente basado en JQuery, migrado a AngularJs. </li>
    <br>
En este caso, la aplicación se ha desarrollado para una tienda de bicicletas.
    
</p>


<H4> Tecnologías empleadas: </H4>
<hr weight=600>
<p>
<ul>
    <H4>Backend:</H4>
    <ul>
        <li> PHP frameworck </li>
        <li>MySql</li>
    </ul>
    <H4>Frontend:</H4>
    <ul>
        <li>Angular 1.4</li>
        <li>Javascript</li>
        <li>Boostrap 3.0</li>
        <li>Css</li>
   </ul>
   <H4>Servicios externos:</H4>
    <ul>
        <li>Firebase</li>
   </ul>     
</ul>
</p>
<H4>Paginas & Características</H4>

<table>
    <tr>
        <th>Página</th>
        <th>Características</th>
    </tr>
    <tr>
        <td>Home</td>
        <td>
            <ul>
                <li>Carrousel: list categories >> List images from DB.</li>
                <li>Categories + Load Categories() >> list categories & list more categories from DB.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Shop</td>
        <td>
            <ul>
                <li>List Productos >> Nos muestra los productos que aparecen en nuestra DB.</li>
                <li>Filtros >> Nos ayuda a visualiza productos a traves del filtrado de los productos. Nos muestra aquellas preferencias aplicadas.</li>
                <li>Favoritos >> Añade y quita los productos favoritos del cliente. Guarda sus preferencias en DB.</li>
                <li>Carrito</li>
                <li>Details >> Nos muestra un resumen del producto con sus caracteríticas</li>
            </ul>
        </td>
    </tr> 
    <tr>
        <td>Modulos a nivel Aplicacion</td>
        <td>
            <ul>
                <li>Search >> Nos permite realizar una busqueda de producto.</li>
                <li>Login >> Uno de los modulos más importantes de la aplicación.
                    <ul>
                        <li> Registro: Control formato REGexp de lo que se introduce en el formulario. Se muestran mensajes si no se cumple con las especificaciones.
                           Control de usuarios, no se permite el registro si el usuario asociado a su correo electrónico, existe. La contraseña se recoge de modo seguro                                    Serializando el formulario. La contraseña se encripta antes de ser guardada junto con los datos del usuario, mediante PASSWOWRD_HASH MD5. Se genera                                un Avatar para cada usuario. Se envia un correo electrónico de comfirmación para habilitar al usuario.
                        </li>
                        <li> Login: Control formato REGexp de lo que se introduce en el formulario. Se muestran mensajes si no se cumple con las especificaciones. Se genera un                                 JWT-Token para cifrar el usuario. Cada vez que queremos realizar una acción. Se comprueba la validez del JWT-token, si no cumple especificaciones                                  se procede a desconectar el usuario.
                        </li>
                        <li> Social Login: Se ha desarrollado con la tecnología de Firebase para las plataformas GITHUB y GOOGLE. 
                        </li>
                        <li> Recuperar Contraseña: Control formato REGexp. Se comprueba que el usuari(correo electrónico) esté registrado, se genera un TokenSeguro y se envía                                  email. Una vez de vuelta a la aplicacion comprovamos la validez del TokenEmail y procedemos a actualizar contraseña. 
                        </li>
                    </ul>
                </li>
                <li>Carrito >> Nos permite realizar compras. Aparecen listados los productos por referencias, aparece la cantidad de productos añadidos al carrito, precio                                      unitario y precio total de las unidades añadidas. Se limita el numero de unidades dependiendo del stock de la tienda. Realiza el calculo de                                     totales de producto y bases. Cada vez que se modifica algun articulo (referencias o cantidad) 
               </li>
            </ul>
        </td>
    </tr>
</table>

