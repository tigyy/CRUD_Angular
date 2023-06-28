import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import { FormBuilder} from '@angular/forms'
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
products?: IProduct;
productForm = this.formbuilder.group({
  name: '',
  img: '',
  price: 0,
  quality: 1,
  description: ''
})
constructor(
  private productSevice : ProductService,
  private router: Router,
  private route : ActivatedRoute,
  private formbuilder: FormBuilder
){
  this.route.paramMap.subscribe((params)=>{
    const id = params.get('id');
    this.productSevice.getOne(id!).subscribe((data)=>{
      this.products = data
      this.productForm.patchValue({
        name: this.products.name,
        img: this.products.img,
        price: this.products.price,
        quality: this.products.quality,
        description: this.products.description,
      })
    })
  })
}
OnUpdate(){
  if(this.productForm.valid){
    const productUpdate : IProduct = {
    id: this.products?.id,
    name: this.productForm.get('name')?.value || '',
    img: this.productForm.get('img')?.value || '',
    price: this.productForm.get('price')?.value|| 0,
    quality: this.productForm.get('quality')?.value|| 1,
    description: this.productForm.get('description')?.value|| '',
    }
    this.productSevice.updateProduct(productUpdate).subscribe((data)=>{
      alert("update thanh cong"),
      this.router.navigate(['/products'])
    })
  }
}
}
