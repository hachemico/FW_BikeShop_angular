<div id="contenido">
    <form autocomplete="on" method="post" name="delete_nike" id="delete_bike" action="index.php?page=controller_bike&op=delete&id=<?php echo $_GET['id']; ?>">
        <table border='0'>
            <tr>
                <td align="center"  colspan="2"><h3>¿Desea seguro borrar la bicicleta <?php echo $_GET['id']; ?>?</h3></td>   
            </tr>
            
            <tr>
                <th>Id Bike: </th>
                    <td>
                         <?php
                            echo $idbike['idbike'];
                         ?>
                    </td>
             </tr>
             <tr>
                <th>Marca: </th>
                    <td>
                         <?php
                           // echo $order['brand'];
                            echo $idbike['brand']
                         ?>
                    </td>
             </tr>
             <th>Modelo: </th>
                    <td>
                         <?php
                            echo $idbike['model'];
                         ?>
                    </td>
            </tr>

            </br>

            <tr>
                <td align="center"><button type="submit" class="Button_green" name="delete" id="delete">Aceptar</button></td>

                <td align="center"><a class="Button_red" href="index.php?page=controller_bike&op=list">Cancelar</a></td>
            </tr>
        </table>
    </form>
</div>