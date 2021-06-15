<H1>FW_BIKESHOP_PHPFramework_AngularJS | RIDE BIKE</H1>

<H3>HUGO MICÓ SANZ</H4>
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
                           Control de usuarios, no se permite el registro si el usuario asociado a su correo electrónico, existe. La contraseña se recoge de modo seguro                                    Serializando el formulario. La contraseña se encripta antes de ser guardada junto con los datos del usuario mediante PASSWOWRD_HASH MD5. Se genera                                un Avatar para cada usuario.
                        </li>
                        <li> Login: Control formato REGexp de lo que se introduce en el formulario. Se muestran mensajes si no se cumple con las especificaciones.</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
   
</table>

