import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:any = []
  loading=false;
  constructor(
    
    private productosService:ProductosService,
    private activatedRoute:ActivatedRoute) { 

    }

  async ngOnInit() {
    try{
      const id=this.activatedRoute.snapshot.paramMap.get("id");
      console.log(id)
      this.producto = await this.productosService.getProducto(id)
      this.loading=true;
      console.log(this.producto)
    }catch(e){

    }
    
  }

}
