@extends('layouts.app')

@section('content')

     <div class="row tabla-ventas">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                        Seccion de Ventas  
                        <a href="{{ route('ventas.create') }}" class="btn btn-success">Crear Factura</a>   
                </div>

                <div class="card-body">
                    <table class="table table-striped display nowrap">
                              <thead>
                                <tr>
                                  <th scope="col">Id de recibo</th>
                                  <th scope="col">Cliente</th>
                                  <th scope="col">Estado de la venta</th>
                                  
                                 
                                </tr>
                              </thead>
                              <tbody>
                                   @if(count($ventas) > 0)
                                          @foreach ($ventas as $venta)
                                              <tr>
	                                              	<td>{{ $venta->header_id }}</td>
	                                                <td>{{ $venta->customer_id }}</td>
	                                                <td>{{ $venta->header_status }}</td> 
                                              </tr>                                        
                                          @endforeach  

                                    @else
                                                <tr><td colspan="6"><center><strong>No hay ventas disponibles</strong></center></td></tr>

                                @endif          
                              </tbody>
                    </table>
                    <div class="pull-right">
                          {{ $ventas->links() }}
                    </div>                    
                </div>
            </div>
        </div>
    </div>

@endsection
