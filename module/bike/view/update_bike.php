<div id="contenido">
    <form autocomplete="on" method="post" name="update_bike" id="update_bike">
        <h1>Modificar Bicicleta</h1>
        <table border='0'>
        <tr>
                <td>Referencia Bicicleta: </td>
                <td><input type="text" id="idbike" name="idbike" placeholder="rferencia" value="<?php echo $idbike['idbike'];?>" readonly/></td>
                <!-- <td><input type="text" id="idbike" name="idbike" placeholder="rferencia" value="<?php echo $order['idbike'];?>" readonly/></td> -->
                <td><font color="red">
                    <span id="error_idbike" class="error">
                        <?php
                            echo "$error_idbike";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            <tr>
                <td>Marca: </td>
                <td><input type="text" id="brand" name="brand" placeholder="marca" value="<?php echo $idbike['brand'];?>"/></td>
                <td><font color="red">
                    <span id="error_brand" class="error">
                        <?php
                            echo "$error_brand";
                        ?>
                    </span>
                </font></font></td>
            </tr>
        
            <tr>
                <td>Modelo: </td>
                <td><input type="text" id="model" name="model" placeholder="modelo" value="<?php echo $idbike['model'];?>"/></td>
                <td><font color="red">
                    <span id="error_model" class="error">
                        <?php
                            echo "$error_model";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            

            <tr>
                <td>Categoria: </td>
                <td><select id="category" name="category" placeholder="Categoria">
                    <?php
                        if($idbike['category']==="xc"){
                    ?>
                        <option value="xc" selected>xc</option>
                        <option value="enduro">Enduro</option>
                        <option value="trail">Trail</option>
                        <option value="emtb">Emtb</option>
                        <option value="road">Road</option>
                    <?php
                        }elseif($idbike['category']==="enduro"){
                    ?>
                        <option value="xc">xc</option>
                        <option value="enduro" selected>Enduro</option>
                        <option value="trail">Trail</option>
                        <option value="emtb">Emtb</option>
                        <option value="road">Road</option>
                    
                        <?php
                        }elseif($idbike['category']==="trail"){
                    ?>
                        <option value="xc">Tarjeta</option>
                        <option value="enduro">Enduro</option>
                        <option value="trail" selected>Trail</option>
                        <option value="emtb">Emtb</option>
                        <option value="road">Road</option>

                        <?php
                        }elseif($idbike['category']==="emtb"){
                    ?>
                        <option value="xc">Tarjeta</option>
                        <option value="enduro">Enduro</option>
                        <option value="trail">Trail</option>
                        <option value="emtb"selected>Emtb</option>
                        <option value="road">Road</option>
                    
                    <?php
                        }else{
                    ?>
                        <option value="xc">xc</option>
                        <option value="enduro">Enduro</option>
                        <option value="trail">Trail</option>
                        <option value="emtb">Emtb</option>
                        <option value="road"selected>Road</option>
                    <?php
                        }
                    ?>
                    </select></td>
                <td><font color="red">
                    <span id="error_category" class="error">
                        <?php
                            echo "$error_category";
                        ?>
                    </span>
                </font></font></td>
            </tr>


            <tr>
                <td>Año: </td>
                <td><input id="year" type="text" name="year" placeholder="Año" value="<?php echo $idbike['year'];?>"/></td>
                <td><font color="red">
                    <span id="error_year" class="error">
                        <?php
                            echo "$error_year";
                        ?>
                    </span>
                </font></font></td>
            </tr>
           
            <tr>
                <td>Fecha Entrada: </td>
                <td><input id="date_in" type="text" name="date_in" placeholder="Fecha Entrada" value="<?php echo $idbike['date_in'];?>"/></td>
                <td><font color="red">
                    <span id="error_date_in" class="error">
                        <?php
                            echo "$error_date_in";
                        ?>
                    </span>
                </font></font></td>
            </tr>


            <tr>
                <td>Tamaño Rueda: </td>
                <td>
                    <?php
                    
                    if ($idbike['wheel_size']==="26"){
                    ?>
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="26"checked/>26"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="27.5"/>27.5"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="29"/>29"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="700"/>700c</td>
                    <?php    
                        }elseif($idbike['wheel_size']==="27.5"){
                    ?>
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="26"/>26"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="27.5"checked/>27.5"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="29"/>29"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="700"/>700c</td>
                    <?php    
                        }elseif($idbike['wheel_size']==="29"){
                    ?>
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="26"/>26"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="27.5"/>27.5"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="29"checked/>29"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="700"/>700c</td>
                    
                    <?php   
                         }else{
                    ?>
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="26"/>26"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="27.5"/>27.5"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="29"/>29"
                        <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda" value="700"checked/>700c</td>
                    <?php
                        }
                    ?>
                    
                </td>
                <td><font color="red">
                    <span id="error_wheel_size" class="error">
                        <?php
                            echo "$error_wheel_size";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            
            <tr>
                <td>Comentario: </td>
                <td><textarea cols="30" rows="5" id="comment" name="comment" placeholder="comentario"><?php echo $idbike['comment'];?></textarea></td>
                <td><font color="red">
                    <span id="error_comment" class="error">
                        <?php
                            echo "$error_comment";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            <tr>
                <td><input type="button" name="update" id="update" value="Enviar" onclick=" validate_update()"/></td>

                <td align="right"><a href="index.php?page=controller_bike&op=list">Volver</a></td>
            </tr>
        </table>
    </form>
</div>