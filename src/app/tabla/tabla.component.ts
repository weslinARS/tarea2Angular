import { Component } from '@angular/core';
import { SInventarioService } from '../sinventario.service';
import { IProducto } from '../iproducto';
import { NgModel } from '@angular/forms';
NgModel
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  public ListaP: Array<IProducto> = [];
  constructor(private ServicionInventario : SInventarioService) { }
  ngOnInit(): void {
    this.ServicionInventario.ListaProductoEmisor.subscribe(
      data => {this.ListaP.push(data[data.length - 1])}
    )
    ; } 
}
