import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:String="Francisco Quarñolo"
  comprado=false;
  productos:any = []

  constructor(private productosService:ProductosService) { 
    
  }
  
  async ngOnInit() {
    //Transformar un observable en una promise
    try{
      this.productos = await this.productosService.getProductos().toPromise();
    }catch(e){
      console.log("Error",e)
    }
    
  }

}
