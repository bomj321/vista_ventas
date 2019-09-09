<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::get('/', 'VentasController@index')
	->name('ventas.index');

Route::get('ventas/creacion', 'VentasController@create')
	->name('ventas.create');

Route::post('ventas/guardar', 'VentasController@store')
	->name('ventas.store');



/******ROUTE FOR AJAX CALLS******/
Route::get('ventas/autocompletetado/codebar', 'VentasController@autocompletecodebar')
	->name('ventas.autocompletecodebar');

Route::get('ventas/autocompletetado/code', 'VentasController@autocompletecode')
	->name('ventas.autocompletecode');

Route::get('ventas/autocompletetado/descripcion', 'VentasController@autocompletedescripcion')
	->name('ventas.autocompletedescripcion');

/******ROUTE FOR AJAX CALLS******/
