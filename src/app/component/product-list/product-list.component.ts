import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products: IProduct[]=[]
constructor(private productService : ProductService){
  this.productService.getAll().subscribe((data)=>{
    this.products = data;
    console.log(data);
  })
}
onRemove(id: number | string){
const validate = confirm("ban co muon xoa khong")
if(validate){
  this.productService.deleteProduct(id).subscribe((data)=>{
    this.products = this.products.filter(item=> item.id != id)
  })
}
}
}
