import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
constructor(
  private productSevice: ProductService,
  private router: Router,
  private formbuilder: FormBuilder
){}
productForm = this.formbuilder.group({
  name: '',
  img: '',
  price: 0,
  quality: 1,
  description: ''
})
OnAdd(){
  if(this.productForm.valid){
    const productAdd : IProduct = {
      name: this.productForm.value.name || '',
      img: this.productForm.value.img || '',
      price: this.productForm.value.price || 0,
      quality: this.productForm.value.quality || 1,
      description: this.productForm.value.description || '',
    }
    this.productSevice.addProduct(productAdd).subscribe((data)=>[
      alert("them thanh cong"),
      this.router.navigate(['/products'])
    ])
  }
}
}
