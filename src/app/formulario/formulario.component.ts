import { Component } from '@angular/core';
import { IProducto } from '../iproducto';
import { SInventarioService } from '../sinventario.service';
import { NgModel } from '@angular/forms';
import { NgForm , FormsModule} from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  Producto : IProducto = {
    nombre : "" ,
    precio : 0 ,
    fechaExpiracion : "" ,
    disponibilidad : 0
  }; 
  constructor(private ServicioInventario : SInventarioService) {
   }
  ngOnInit(): void {
  }
  // metodos 
  AgregarProducto () : void {
    this.ServicioInventario.AgregarProducto(this.Producto)
    this.Producto = {
      nombre : "" ,
      precio : 0 ,
      fechaExpiracion : "" ,
      disponibilidad : 0
    };
    
  }
}
