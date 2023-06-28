import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductUpdateComponent } from './component/product-update/product-update.component';

const routes: Routes = [
  {path: "products", component : ProductListComponent},
  {path: "products/add" , component: ProductAddComponent},
  {path: "products/update/:id", component : ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
