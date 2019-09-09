<div class="row">
	<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('customer_id', 'Cliente') }}
				
				{!! Form::select('customer_id',$clientes,null,['class' => 'form-control']) !!}

				@foreach($errors->get('customer_id') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>

	</div>

	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('site_id', 'Sucursal') }}
				{!! Form::select('customer_id',$sucursales,null,['class' => 'form-control']) !!}
	
				@foreach($errors->get('site_id') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach

		</div>
	</div>

	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{  Form::label('payment_type_code', 'Tipo de Comprobante') }}
				{!! Form::select('payment_type_code', ['P' => 'Pagadero', 'D' => 'Deudad'], null,['class' => 'form-control'], ['placeholder' => 'Elije un tipo de documento']) !!}

				@foreach($errors->get('payment_type_code') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>

	<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
		<div class="form-group">

			    {{ Form::label('invoice_nmber_paymentt', 'Número de Comprobante') }}
	            {{ Form::text('invoice_nmber_paymentt', null, ['class' => 'form-control', 'id' => 'invoice_nmber_paymentt']) }}

				@foreach($errors->get('invoice_nmber_paymentt') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>

	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
		<div class="form-group">

			    {{ Form::label('segment1', 'IGV 18%') }}
	            {!! Form::checkbox('workday', 'monday') !!}


				<!--@foreach($errors->get('segment1') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
-->		</div>
	</div>
	
</div>



<!---------------------------DETALLES DE LA FACTURA------------------------------>



		<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 button-add">
				<div class="form-group">
					<button type="button" class="btn btn-primary btn-open-modal" data-toggle="modal" data-target="#detallesVentas">
  						Agregar Producto
			       </button>
					  
				</div>
			</div>

			<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
				<div class="form-group">
        				{{ Form::submit('Generar Factura', ['class' => 'btn btn-danger']) }}
				</div>

			</div>

			
		</div>

		

		
			
<!---------------------TABLA DE COMPRAS------------------------>
<div class="table-responsive">

		<table class="table" id="tbventas">
			  <thead class="table-info">
			    <tr>
			      <th scope="col">Código del Producto</th>
			      <th scope="col">Descripción</th>
			      <th scope="col">Cantidad</th>
			      <th scope="col">Precio</th>
			      <th scope="col">Subtotal</th>			     
			      <th scope="col">Acciones</th>
			    </tr>
			  </thead>
			  <tbody>			   
			   	   			   

			    <!--<tr>
			     <td colspan="5"><strong class="float-right">Total Lineas:</strong></td>
      			 <td><input class='input_venta form-control' readonly id="total_linea"></td>
			    </tr>-->

			   <!-- <tr>
			     <td colspan="5"><strong class="float-right">Total igv:</strong></td>
      			 <td><input class='input_venta form-control' readonly id="total_igv"></td>
			    </tr>-->

			    <tr>
			     <td colspan="5"><strong class="float-right">Total Factura:</strong></td>
      			 <td><input class='input_venta form-control' readonly id="total_factura"></td>
			    </tr>
			  </tbody>
		</table>		
</div>

<!---------------------TABLA DE COMPRAS------------------------>	
</div>
