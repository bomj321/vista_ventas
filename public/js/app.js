/***************************AUTOCOMPLETADO DETALLES DEL PRODUCTO***********************/

/***AUTOCOMPLETADO PARA EL CODIGO DE BARRA***/
$(document).ready(function() {
 
		$('#qb_upc_ean').autocomplete({
			source: "/ventas/autocompletetado/codebar",
			minLength: 2,
			select: function(event,ui){
				event.preventDefault();

                          $('#codigo').val(""); 
                          $('#descripcion').val("");                        
                          $('#qb_upc_ean').val(ui.item.value); 

                        var plantilla_tabla = `

                              <center><h4><strong>Datos del Producto</strong></h4></center>

                             <input type="hidden" class="form-control" id="id_producto" value='${ui.item.id}'>
                             <input type="hidden" class="form-control" id="id_descripcion" value='${ui.item.descripcion}'>
                             <input type="hidden" class="form-control" id="button_editar">
                             <input type="hidden" class="form-control" id="id_tr_input">


                              <div class="form-group">
                                <label for="codigo_producto">Código</label>
                                <input type="text" class="form-control" id="codigo_producto" value='${ui.item.codigo}' readonly>
                              </div>

                              <div class="form-group">
                                <label for="nombre_producto">Nombre</label>
                                <input type="text" class="form-control" id="nombre_producto" value='${ui.item.nombre}' readonly>
                              </div>

                              <div class="form-group">
                                <label for="list_price_per_unit_producto">Precio Unitario</label>
                                <input type="text" class="form-control" id="list_price_per_unit_producto" value='${ui.item.precio_unitario}' readonly>
                              </div>  

                              <div class="form-group">
                                <label for="inv_onhand_quantities_detail_producto">Stock</label>
                                <input type="text" class="form-control" id="inv_onhand_quantities_detail_producto" value='${ui.item.stock_producto}' readonly>
                              </div>  

                              <div class="form-group">
                                <label for="cantidad_producto">Cantidad</label>
                                <input type="text" class="form-control" id="cantidad_producto" onkeypress="return solonumeros(event)">
                              </div>  

                              <div class="form-group">
                                <label for="importe_producto">Importe</label>
                                <input type="text" class="form-control" id="importe_producto" value='${ui.item.precio_unitario}'>
                              </div> 

                              <div class="form-group">
                                <label for="subtotal_producto">Subtotal</label>
                                <input type="text" class="form-control" id="subtotal_producto" readonly>
                              </div>       

                              <img class="img-producto" src="https://lorempixel.com/g/400/200" alt="Imagen del Producto">`

                             $("#datosProducto").html(plantilla_tabla);                                    
                      
					}
			         
    
		});
 
	});

$("#qb_upc_ean" ).on( "keydown", function( event ) {
						if (event.keyCode== $.ui.keyCode.LEFT || event.keyCode== $.ui.keyCode.RIGHT || event.keyCode== $.ui.keyCode.UP || event.keyCode== $.ui.keyCode.DOWN || event.keyCode== $.ui.keyCode.DELETE || event.keyCode== $.ui.keyCode.BACKSPACE )
						{

                             $('#codigo').val(""); 
                             $('#descripcion').val(""); 
                             $('#id_producto').val(""); 
                             $('#id_descripcion').val(""); 
                             $('#codigo_producto').val(""); 
                             $('#nombre_producto').val("");
                             $('#list_price_per_unit_producto').val("");
                             $('#inv_onhand_quantities_detail_producto').val("");
                             $('#cantidad_producto').val("");
                             $('#importe_producto').val("");
                             $('#subtotal_producto').val("");                            
											
						}
						if (event.keyCode==$.ui.keyCode.DELETE){
                             $('#codigo').val(""); 
                             $('#descripcion').val(""); 
                             $('#id_producto').val(""); 
                             $('#id_descripcion').val(""); 
                             $('#codigo_producto').val(""); 
                             $('#nombre_producto').val("");
                             $('#list_price_per_unit_producto').val("");
                             $('#inv_onhand_quantities_detail_producto').val("");
                             $('#cantidad_producto').val("");
                             $('#importe_producto').val("");
                             $('#subtotal_producto').val("");         
						}
			});	

/***AUTOCOMPLETADO PARA EL CODIGO DE BARRA***/


/***AUTOCOMPLETADO PARA EL CODIGO***/
$(document).ready(function() {
 
    $('#codigo').autocomplete({
      source: "/ventas/autocompletetado/code",
      minLength: 2,
      select: function(event,ui){
        event.preventDefault();

                       $('#qb_upc_ean').val(""); 
                       $('#descripcion').val(""); 
                       //$('#id_producto').val(ui.item.id);  
                       $('#codigo').val(ui.item.value); 
                       //$('#codigo_producto').val(ui.item.value);  
                       //$('#nombre_producto').val(ui.item.nombre);
                       //$('#list_price_per_unit_producto').val(ui.item.precio_unitario);
                       //$('#inv_onhand_quantities_detail_producto').val(ui.item.stock_producto);      


                         var plantilla_tabla = `

                              <center><h4><strong>Datos del Producto</strong></h4></center>

                             <input type="hidden" class="form-control" id="id_producto" value='${ui.item.id}'>
                             <input type="hidden" class="form-control" id="id_descripcion" value='${ui.item.descripcion}'>
                             <input type="hidden" class="form-control" id="button_editar">
                             <input type="hidden" class="form-control" id="id_tr_input">


                              <div class="form-group">
                                <label for="codigo_producto">Código</label>
                                <input type="text" class="form-control" id="codigo_producto" value='${ui.item.value}' readonly>
                              </div>

                              <div class="form-group">
                                <label for="nombre_producto">Nombre</label>
                                <input type="text" class="form-control" id="nombre_producto" value='${ui.item.nombre}' readonly>
                              </div>

                              <div class="form-group">
                                <label for="list_price_per_unit_producto">Precio Unitario</label>
                                <input type="text" class="form-control" id="list_price_per_unit_producto" value='${ui.item.precio_unitario}' readonly>
                              </div>  

                              <div class="form-group">
                                <label for="inv_onhand_quantities_detail_producto">Stock</label>
                                <input type="text" class="form-control" id="inv_onhand_quantities_detail_producto" value='${ui.item.stock_producto}' readonly>
                              </div>  

                              <div class="form-group">
                                <label for="cantidad_producto">Cantidad</label>
                                <input type="text" class="form-control" id="cantidad_producto" onkeypress="return solonumeros(event)">
                              </div>  

                              <div class="form-group">
                                <label for="importe_producto">Importe</label>
                                <input type="text" class="form-control" id="importe_producto" value='${ui.item.precio_unitario}'>
                              </div> 

                              <div class="form-group">
                                <label for="subtotal_producto">Subtotal</label>
                                <input type="text" class="form-control" id="subtotal_producto" readonly>
                              </div>       

                              <img class="img-producto" src="https://lorempixel.com/g/400/200" alt="Imagen del Producto">`

                             $("#datosProducto").html(plantilla_tabla);                  
                     
          }
               
    
    });
 
  });

$("#codigo" ).on( "keydown", function( event ) {
            if (event.keyCode== $.ui.keyCode.LEFT || event.keyCode== $.ui.keyCode.RIGHT || event.keyCode== $.ui.keyCode.UP || event.keyCode== $.ui.keyCode.DOWN || event.keyCode== $.ui.keyCode.DELETE || event.keyCode== $.ui.keyCode.BACKSPACE )
            {
                             $('#qb_upc_ean').val(""); 
                             $('#descripcion').val(""); 
                             $('#id_producto').val(""); 
                             $('#id_descripcion').val(""); 
                             $('#codigo_producto').val(""); 
                             $('#nombre_producto').val("");
                             $('#list_price_per_unit_producto').val("");
                             $('#inv_onhand_quantities_detail_producto').val("");
                             $('#cantidad_producto').val("");
                             $('#importe_producto').val("");
                             $('#subtotal_producto').val("");                                 
                      
            }
            if (event.keyCode==$.ui.keyCode.DELETE){
                            
                             $('#qb_upc_ean').val(""); 
                             $('#descripcion').val(""); 
                             $('#id_producto').val(""); 
                             $('#id_descripcion').val(""); 
                             $('#codigo_producto').val(""); 
                             $('#nombre_producto').val("");
                             $('#list_price_per_unit_producto').val("");
                             $('#inv_onhand_quantities_detail_producto').val("");
                             $('#cantidad_producto').val("");
                             $('#importe_producto').val("");
                             $('#subtotal_producto').val("");          
            }
      });  

/***AUTOCOMPLETADO PARA EL CODIGO***/

/***AUTOCOMPLETADO PARA LAS DESCRIPCION***/
$(document).ready(function() {
 
    $('#descripcion').autocomplete({
      source: "/ventas/autocompletetado/descripcion",
      minLength: 2,
      select: function(event,ui){
        event.preventDefault();
                       $('#qb_upc_ean').val(""); 
                       $('#codigo').val("");
                       $('#descripcion').val(ui.item.value);          
                       

                        var plantilla_tabla = `

                              <center><h4><strong>Datos del Producto</strong></h4></center>

                             <input type="hidden" class="form-control" id="id_producto" value='${ui.item.id}'>
                             <input type="hidden" class="form-control" id="id_descripcion" value='${ui.item.value}'>
                             <input type="hidden" class="form-control" id="button_editar">
                             <input type="hidden" class="form-control" id="id_tr_input">


                              <div class="form-group">
                                <label for="codigo_producto">Código</label>
                                <input type="text" class="form-control" id="codigo_producto" value='${ui.item.codigo}' readonly>
                              </div>

                              <div class="form-group">
                                <label for="nombre_producto">Nombre</label>
                                <input type="text" class="form-control" id="nombre_producto" value='${ui.item.nombre}' readonly>
                              </div>

                              <div class="form-group">
                                <label for="list_price_per_unit_producto">Precio Unitario</label>
                                <input type="text" class="form-control" id="list_price_per_unit_producto" value='${ui.item.precio_unitario}' readonly>
                              </div>  

                              <div class="form-group">
                                <label for="inv_onhand_quantities_detail_producto">Stock</label>
                                <input type="text" class="form-control" id="inv_onhand_quantities_detail_producto" value='${ui.item.stock_producto}' readonly>
                              </div>  

                              <div class="form-group">
                                <label for="cantidad_producto">Cantidad</label>
                                <input type="text" class="form-control" id="cantidad_producto" onkeypress="return solonumeros(event)">
                              </div>  

                              <div class="form-group">
                                <label for="importe_producto">Importe</label>
                                <input type="text" class="form-control" id="importe_producto" value='${ui.item.precio_unitario}'>
                              </div> 

                              <div class="form-group">
                                <label for="subtotal_producto">Subtotal</label>
                                <input type="text" class="form-control" id="subtotal_producto" readonly>
                              </div>       

                              <img class="img-producto" src="https://lorempixel.com/g/400/200" alt="Imagen del Producto">`

                             $("#datosProducto").html(plantilla_tabla);           
          }
               
    
    });
 
  });

$("#descripcion" ).on( "keydown", function( event ) {
            if (event.keyCode== $.ui.keyCode.LEFT || event.keyCode== $.ui.keyCode.RIGHT || event.keyCode== $.ui.keyCode.UP || event.keyCode== $.ui.keyCode.DOWN || event.keyCode== $.ui.keyCode.DELETE || event.keyCode== $.ui.keyCode.BACKSPACE )
            {
                             $('#qb_upc_ean').val(""); 
                             $('#codigo').val(""); 
                             $('#id_producto').val(""); 
                             $('#id_descripcion').val(""); 
                             $('#codigo_producto').val(""); 
                             $('#nombre_producto').val("");
                             $('#list_price_per_unit_producto').val("");
                             $('#inv_onhand_quantities_detail_producto').val("");
                             $('#cantidad_producto').val("");
                             $('#importe_producto').val("");
                             $('#subtotal_producto').val("");                            
                      
            }
            if (event.keyCode==$.ui.keyCode.DELETE){
                            
                             $('#qb_upc_ean').val(""); 
                             $('#codigo').val(""); 
                             $('#id_producto').val(""); 
                             $('#id_descripcion').val(""); 
                             $('#codigo_producto').val(""); 
                             $('#nombre_producto').val("");
                             $('#list_price_per_unit_producto').val("");
                             $('#inv_onhand_quantities_detail_producto').val("");
                             $('#cantidad_producto').val("");
                             $('#importe_producto').val("");
                             $('#subtotal_producto').val("");          
            }
      });  

/***AUTOCOMPLETADO PARA LAS DESCRIPCION***/

/***************************AUTOCOMPLETADO DETALLES DEL PRODUCTO***********************/


$(document).on("click",".btn-editar-modal", function(){
        var producto = $(this).val(); 
        var infoproducto = producto.split("*");
     

         $('#id_producto').val(infoproducto[1]); 
         $('#id_descripcion').val(infoproducto[2]);
         $('#button_editar').val('Editar');

         $('#codigo_producto').val(infoproducto[3]); 
         $('#nombre_producto').val(infoproducto[4]);
         $('#list_price_per_unit_producto').val(infoproducto[5]);
         $('#inv_onhand_quantities_detail_producto').val(infoproducto[6]);
         $('#cantidad_producto').val(infoproducto[7]);
         $('#importe_producto').val(infoproducto[8]);
         $('#subtotal_producto').val(infoproducto[9]); 
         $('#id_tr_input').val(infoproducto[10]); 

         $("#button_add").html('Editar Producto');  
        
});


$(document).on("click",".btn-open-modal", function(){  

         $("#button_add").html('Agregar Producto');  
        
});


function sumar(){
    subtotal = 0;
    $("#tbventas tbody tr").each(function(){
        subtotal = subtotal + Number($(this).find("td:eq(4)").text());
    });

   
     var total_de_factura              = subtotal;

     var total_de_factura_impuestos     = subtotal + (subtotal*0.18);

    //$("#total_linea").val(subtotal);
    
    $("#total_factura_sin_impuestos").val(total_de_factura); 
    $("#total_igv").val('18%');
    $("#total_factura_impuestos").val(total_de_factura_impuestos); 
}


/***FUNCION DE SOLO NUMEROS****/

function solonumeros(e){
  key = e.keyCode || e.which;
  teclado= String.fromCharCode(key);  
  numeros ="0,1,2,3,4,5,6,7,8,9";
  especiales =[8,37,39,46]; // array
  teclado_especial = false;


  for (var i in especiales){
    if(key==especiales[i] || key ==numeros){
      teclado_especial = true;

    }
  }
  

  if(numeros.indexOf(teclado)==-1 && !teclado_especial){      
      return false;
  }
}

/***FUNCION DE SOLO NUMEROS****/

/****FUNCION PARA SUMAR DETALLES PRODUCTOS****/ 

$(document).on("keyup","#cantidad_producto", function(){
    var importe_producto  = $("#importe_producto").val();
        var cantidad_producto             = $('#cantidad_producto').val(); 

        if (cantidad_producto == '' || isNaN(cantidad_producto)) {
            cantidad_producto = 0
        }

         if (importe_producto == '' || isNaN(importe_producto)) {
            importe_producto = 0
        }

        var importe_producto_number = Number(importe_producto);
        var cantidad_producto_number            = Number(cantidad_producto);

        var subtotal        = importe_producto_number * cantidad_producto_number;

        $("#subtotal_producto").val(subtotal);

});

$(document).on("keyup","#importe_producto", function(){
    var importe_producto  = $("#importe_producto").val();
        var cantidad_producto             = $('#cantidad_producto').val(); 

         if (cantidad_producto == '' || isNaN(cantidad_producto)) {
            cantidad_producto = 0
        }

         if (importe_producto == '' || isNaN(importe_producto)) {
            importe_producto = 0
        }

        var importe_producto_number = Number(importe_producto);
        var cantidad_producto_number            = Number(cantidad_producto);

        var subtotal        = importe_producto_number * cantidad_producto_number;

        $("#subtotal_producto").val(subtotal);

});




/****FUNCION PARA SUMAR DETALLES PRODUCTOS****/

/****FUNCION PARA BORRAR****/
$(document).on("click",".btn-remove-producto", function(){
    $(this).closest("tr").remove();
    sumar();

});

/****FUNCION PARA BORRAR****/


            /**SECCION DE AGREGAR PRODUCTOS Y SUMAR**/
     $(document).on("click","#button_add", function(){

                /***INPUTS WITH INFORMATION***/  
                 
                    var id_producto                           = $('#id_producto').val(); 
                    var id_descripcion                        = $('#id_descripcion').val();   
                    var button_editar                         = $('#button_editar').val();
                    var id_tr_input                           = $('#id_tr_input').val();

                    var codigo_producto                       = $('#codigo_producto').val();      
                    var nombre_producto                       = $("#nombre_producto").val();
                    var list_price_per_unit_producto          = $("#list_price_per_unit_producto").val();
                    var inv_onhand_quantities_detail_producto = $('#inv_onhand_quantities_detail_producto').val(); 
                    var cantidad_producto                     = $('#cantidad_producto').val(); 
                    var importe_producto                      = $('#importe_producto').val();
                    var subtotal_producto                     = $('#subtotal_producto').val(); 
                    var subtotal_producto_number              = Number(subtotal_producto)   

                   

                   
                /***INPUTS WITH INFORMATION***/

               if(inv_onhand_quantities_detail_producto == 'Sin disponibilidad'){
                  toastr.error('No existen productos en el stock');
                  return false
               }


                if( Number(cantidad_producto) > Number(inv_onhand_quantities_detail_producto)){
                  toastr.error('La cantidad del productos es mayor que el stock');
                  return false
               }

               if( Number(cantidad_producto) < 0 ||  Number(cantidad_producto) == 0){
                  toastr.error('Error en la cantidad');
                  return false
               }

                 if(subtotal_producto == ''){
                  toastr.error('Debes haber un subtotal');
                  return false
               }

                if(importe_producto == ''){
                  toastr.error('Debes ingresar un importe');
                  return false
               }

                if( Number(importe_producto) <  Number(list_price_per_unit_producto)){
                  toastr.error('El importe debe ser mayor o igual al precio unitario');
                  return false
               }

               if( Number(list_price_per_unit_producto <= 0)){
                  toastr.error('El precio del producto debe ser mayor a cero');
                  return false
               }

                if(Number(importe_producto) <= 0){
                  toastr.error('El importe debe ser mayor a cero');
                  return false
               }

               if(id_descripcion == ''){

                   id_descripcion = 'Sin descripción';
                  
               }

               //alert(button_editar);

               if (button_editar == 'Editar') {                  
                        document.getElementById(id_tr_input).remove();
                        $('#detallesVentas').modal('hide');

                  /* $("#${id_tr_input}").remove();
                   alert($("#${id_tr_input}").remove());*/

               }


            /*********PLANTILLA PARA LA TABLA************/

            var id_producto                           = $('#id_producto').val(); 
            var id_descripcion                        = $('#id_descripcion').val();       
            var codigo_producto                       = $('#codigo_producto').val();      
            var nombre_producto                       = $("#nombre_producto").val();
            var list_price_per_unit_producto          = $("#list_price_per_unit_producto").val();
            var inv_onhand_quantities_detail_producto = $('#inv_onhand_quantities_detail_producto').val(); 
            var cantidad_producto                     = $('#cantidad_producto').val(); 
            var importe_producto                      = $('#importe_producto').val();
            var subtotal_producto                     = $('#subtotal_producto').val(); 
            var subtotal_producto_number              = Number(subtotal_producto)   

            var number_random                         = Math.round((new Date()).getTime() / 1000);   

            var id_tr                                 =  number_random;

            var plantilla_tabla = `
            <tr id='${id_tr}'>

                    <td>
                    <strong>${codigo_producto}</strong>
                    <input type='hidden' name='id_producto[]' value='${id_producto}'></input>  
                    <input type='hidden' name='codigo_producto[]' value='${codigo_producto}'></input>   
                    <input type='hidden' name='id_descripcion[]' value='${id_descripcion}'></input> 
                    <input type='hidden' name='cantidad_producto[]' value='${cantidad_producto}'></input> 
                    <input type='hidden' name='importe_producto[]' value='${importe_producto}'></input> 
                    <input type='hidden' name='subtotal_producto_number[]' value='${subtotal_producto_number}'></input>                              
                    </td>


                    <td><strong>${id_descripcion}</strong></td>

                    <td><strong>${cantidad_producto}</strong></td>


                    <td><strong>${importe_producto}</strong></td>

                    <td><strong>${subtotal_producto_number}</strong></td>      

                    <td> 
                        <button value='*${id_producto}*${id_descripcion}*${codigo_producto}*${nombre_producto}*${list_price_per_unit_producto}*${inv_onhand_quantities_detail_producto}*${cantidad_producto}*${importe_producto}*${subtotal_producto}*${id_tr}' type='button' class="btn btn-primary btn-sm btn-editar-modal" data-toggle="modal" data-target="#detallesVentas">
                            <span class="material-icons">Editar</span>
                        </button>

                         <a type='button' class="btn btn-danger btn-sm btn-remove-producto">
                            <span class="material-icons">Borrar</span>
                        </a>
                    </td>

            </tr>
            `
            $("#tbventas tbody").prepend(plantilla_tabla);

            /*********PLANTILLA PARA LA TABLA************/  

            sumar();
  
                 $('#qb_upc_ean').val(""); 
                 $('#codigo').val(""); 
                 $('#id_producto').val(""); 
                 $('#codigo_producto').val(""); 
                 $('#nombre_producto').val("");
                 $('#list_price_per_unit_producto').val("");
                 $('#inv_onhand_quantities_detail_producto').val("");
                 $('#cantidad_producto').val("");
                 $('#importe_producto').val("");
                 $('#subtotal_producto').val("");    
                
    })


 
 $(document).on("click",".btn-submit-button", function(){
 
   //e.preventDefault();

      $('#realizarVentas').modal('hide');
      var invoice_nmber_paymentt  = $('#invoice_nmber_paymentt').val();
      
       
    /***INPUTS WITH INFORMATION***/

     if(invoice_nmber_paymentt == ''){
      toastr.error('Debe ingresar un numero de comprobante');
      return false
    }

  


var parametros = new FormData($("#form_ventas")[0]); 

 
   $.ajax({
            url: '/ventas/guardar',
            type:"POST",
            contentType:false,
            processData:false,
            data: parametros,
            headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            beforeSend: function() {
                     toastr.warning('Realizando Venta Espere...');
                     toastr.clear()
              },
               success:function(resp){    
                toastr.success(resp.message, 'Venta de productos');
               /* setTimeout(function(){
                   location.reload(); 
                 }, 2000);*/

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });
     return false;




  });







/**SECCION DE AGREGAR PRODUCTOS Y SUMAR**/