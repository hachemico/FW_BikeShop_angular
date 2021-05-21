<main class="main-container">
     <div id="contenido">
        <div class="container">
            <div class="row">
                    <h3>BICICLETAS DISPONIBLES</h3>
            </div>
            <div class="row">
            <table id=buton>
                    <tr>
                        <td><p><a class="Button_green" href="index.php?page=controller_bike&op=create" data-tr="Añadir">AÑADIR</a></p>
                        <td ><p align="right"><a class="Button_red" href="index.php?page=controller_bike&op=deletall" data-tr="Borrar Todo">BORRAR</a></p>
                    </tr>
            </table>
                <table id="datatable">
                <thead>
                    <tr>
                        <th width=110 data-tr="Id Bicicleta"><b></b></th>
                        <th width=110 data-tr="Marca"><b></b></th>
                        <th width=110 data-tr="Modelo"><b></b></th>
                        <th width=395 data-tr="Año"><b></b></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        if ($rdo->num_rows === 0){
                            echo '<tr>';
                            echo '<td align="center"  colspan="3">NO HAY NINGUNA BICICLETA EN STOCK </td>';
                            echo '</tr>';
                        }else{
                            foreach ($rdo as $row) {
                                echo '<tr>';
                                echo '&nbsp';
                                echo '<td width=110>'. $row['idbike'] . '</td>';
                                echo '<td width=110>'. $row['brand'] . '</td>';
                                echo '<td width=110>'. $row['model'] . '</td>';
                                echo '<td width=110>'. $row['year'] . '</td>';
                                echo '<td width=395>';
                                
                                print ("<div class='Button_blue idbike' data-tr='Ver'  id='".$row['idbike']."'></div>");  //READ
                                echo '&nbsp';
                                // echo '<a class="Button_blue" href="index.php?page=controller_bike&op=read&id='.$row['idbike'].'" data-tr="Ver">VER</a>';
                                //echo '&nbsp;';
                                echo '<a class="Button_green" href="index.php?page=controller_bike&op=update&id='.$row['idbike'].'" data-tr="Modificar">ACTUALIZAR</a>';   
                                echo '&nbsp;';
                                echo '<a class="Button_red" href="index.php?page=controller_bike&op=delete&id='.$row['idbike'].'" data-tr="Eliminar">BORRAR</a>';
                                echo '&nbsp;';
                                echo '</td>';
                                echo '</tr>';
                                echo '&nbsp';
                            }
                        }
                    ?>
                    </tbody>
                </table>
            </div>
        </div>
  
    <!-- </div> -->
<!-- modal window -->
<section id="bike_modal" class="bike_modal">
  
</section>
</div>
</main>