import { EventEmitter, Injectable, Output } from '@angular/core';
import { IProducto } from './iproducto';
@Injectable({
  providedIn: 'root'
})
export class SInventarioService {
  ListaProductos  : Array<IProducto> = [];
  @Output()
  ListaProductoEmisor = new  EventEmitter<Array<IProducto>>();
  constructor() {
   }

  AgregarProducto (nuevoProducto : IProducto) : void {
    this.ListaProductos.push(nuevoProducto);
    this.cambioListaProducto();
  }
  cambioListaProducto () : void {
    this.ListaProductoEmisor.emit(this.ListaProductos);
  }
}
