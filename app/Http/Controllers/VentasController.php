<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Requests;

class VentasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $ventas = DB::table('oe_order_headers_all')
                   ->paginate(15);


         return view('ventas.index',compact('ventas'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        /****REGISTROS PARA LOS SELECTS*****/
                    $clientes = DB::table('cliente')->pluck('first_name', 'idcliente');
                    $sucursales = DB::table('inv_sites')->pluck('name', 'id');
                   
       /****REGISTROS PARA LOS SELECTS*****/
         return view('ventas.create',compact('clientes','sucursales'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        if (!empty($request->apply_tax)) {
            $apply_tax = $request->apply_tax;
        }else{
            $apply_tax = 'N';
        }

          DB::table('oe_order_headers_all')->insert([
                         [
                             'customer_id'            => $request->customer_id, 
                             'site_id'                => $request->site_id, 
                             'payment_type_code'      => $request->payment_type_code, 
                             'invoice_nmber_paymentt' => $request->invoice_nmber_paymentt, 
                             'apply_tax'              => $apply_tax,
                             'currency_code'          => 'PEN',                              
                             'ordered_date'           => date('Y-m-d'),


                             'order_number'           => time(),
                         ]                       
            ]);



        /**OBTAIN ID FROM LAST INSERT**/
            $last_id = DB::getPdo()->lastInsertId();
        /**OBTAIN ID FROM LAST INSERT**/

        for ($i=0; $i <count($request->id_producto) ; $i++) { 

                $producto = DB::table('inv_item')
                    ->where('inv_item_id', $request->id_producto[$i])                    
                    ->get();


                DB::table('oe_order_lines_all')->insert([
                         [
                              'site_id'                => $request->site_id,
                              'header_id'              => $last_id,
                              'item_id'                => $request->id_producto[$i], 
                              'ordered_item'           => $request->id_descripcion[$i],
                              'ordered_quantity'       => $request->cantidad_producto[$i], 
                              'ordered_price'          => $request->importe_producto[$i], 

                              'request_date'           => date('Y-m-d'),
                              'line_category_id'       => $producto[0]->idcategoria,

                              'line_number'            => time(),
                              'order_quantity_uom'     => $producto[0]->primary_uom_code,
                              'tax_date'               => date('Y-m-d'),
                              'primary_uom_code'       => $producto[0]->primary_uom_code,
                              'primary_quantity_uom'   => $request->cantidad_producto[$i],
                              'status_delivered'       => 'UNDELIVERED', 
                                                             
                         ]                       
                ]); 
        }



        $data = [          
            'message'      => 'Venta Realizada',
            

          ];

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function autocompletecodebar(Request $request)
    {
        $search = $request->get('term');

        $results = array();

        $productos = DB::table('inv_item')
                    ->where('qb_upc_ean', 'LIKE', '%'. $search. '%')                    
                    ->get();

        foreach ($productos as $query)
        {
            $stockProduct = DB::table('inv_onhand_quantities_detail')
                     ->select(DB::raw('SUM(primary_transaction_quantity) as stock'))
                     ->where('item_id', $query->inv_item_id)
                     ->groupBy('item_id')
                     ->get();

            if (empty($stockProduct)) {
                $stock_producto_value = 'Sin disponibilidad';
            }else{
                $stock_producto_value = $stockProduct[0]->stock;
            }


            $results[] = [ 'id' => $query->inv_item_id, 'value' => $query->qb_upc_ean,'nombre' => $query->nombre,'precio_unitario' => $query->list_price_per_unit,'stock_producto' => $stock_producto_value,'codigo' => $query->codigo,'descripcion' => $query->descripcion];
        }            

        return response()->json($results);

        
    }

    public function autocompletecode(Request $request)
    {
        $search = $request->get('term');

        $results = array();

        $productos = DB::table('inv_item')
                    ->where('codigo', 'LIKE', '%'. $search. '%')                    
                    ->get();

        foreach ($productos as $query)
        {
            $stockProduct = DB::table('inv_onhand_quantities_detail')
                     ->select(DB::raw('SUM(primary_transaction_quantity) as stock'))
                     ->where('item_id', $query->inv_item_id)
                     ->groupBy('item_id')
                     ->get();

            if (empty($stockProduct)) {
                $stock_producto_value = 'Sin disponibilidad';
            }else{
                $stock_producto_value = $stockProduct[0]->stock;
            }

            $results[] = [ 'id' => $query->inv_item_id, 'value' => $query->codigo,'codebar' => $query->qb_upc_ean,'nombre' => $query->nombre,'precio_unitario' => $query->list_price_per_unit,'stock_producto' => $stock_producto_value,'descripcion' => $query->descripcion ];
        }            

        return response()->json($results);

        
    }

    public function autocompletedescripcion(Request $request)
    {
        $search = $request->get('term');

        $results = array();

        $productos = DB::table('inv_item')
                    ->where('descripcion', 'LIKE', '%'. $search. '%')                    
                    ->get();

        foreach ($productos as $query)
        {

            $stockProduct = DB::table('inv_onhand_quantities_detail')
                     ->select(DB::raw('SUM(primary_transaction_quantity) as stock'))
                     ->where('item_id', $query->inv_item_id)
                     ->groupBy('item_id')
                     ->get();

            if (empty($stockProduct)) {
                $stock_producto_value = 'Sin disponibilidad';
            }else{
                $stock_producto_value = $stockProduct[0]->stock;
            }


            $results[] = [ 'id' => $query->inv_item_id, 'value' => $query->descripcion,'nombre' => $query->nombre,'precio_unitario' => $query->list_price_per_unit,'stock_producto' => $stock_producto_value,'codigo' => $query->codigo];
        }            

        return response()->json($results);

        
    }
}
