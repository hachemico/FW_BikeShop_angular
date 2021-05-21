<div id="contenido" class="col-md-6">
    <form autocomplete="on" method="post" name="alta_bike" id="alta_bike">

    <fieldset>
        <legend> <h3 class="nomargin">Añadir Bicicleta</h3> </legend>
        <table border='0'>
            <tr>
                <td>Id Bicicleta: </td>
                <td><input type="text" id="idbike" name="idbike" placeholder="nº referencia" value=""/></td>
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
                <td><input type="text" id="brand" name="brand" placeholder="Marca" value=""/></td>
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
                <td><input type="text" id="model" name="model" placeholder="Modelo" value=""/></td>
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
                <td><select id="category" name="category" placeholder="Categoría">
                    <option value="xc" selected>XCountry</option>
                    <option value="enduro">Enduro</option>
                    <option value="trail">Trail</option>
                    <option value="emtb">Emtb</option>
                    <option value="road">Road</option>
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
                <td><input id="year" type="text" name="year" placeholder="Año" value=""/></td>
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
                <td><input id="date_in" type="text" name="date_in" placeholder="Fecha Entrada" value=""/></td>
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
                </br>
                <td><ul>
                    <li> <input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda " value="26"/>26"</li>
                    <li><input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda " value="275"/>27.5"  </li>
                    <li><input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda " value="29"/>29"     </li>
                    <li><input type="radio" id="wheel_size" name="wheel_size" placeholder="Tamaño de Rueda " value="700"/>700c   </li>
                </ul></td>
                
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
                <td><textarea cols="30" rows="5" id="comment" name="comment" placeholder="comment" value=""></textarea></td>
                <td><font color="red">
                    <span id="error_comment" class="error">
                        <?php
                            echo "$error_comment";
                        ?>
                    </span>
                </font></font></td>
            </tr>
                       
            <tr>
                <td><input type="button" name="create" id="create" value=" Enviar " onclick="validate()"/></td>

                <td align="right"><a href="index.php?page=controller_bike&op=list">volver</a></td>
            </tr>
        </table>
        </fieldset>
    </form>
</div>