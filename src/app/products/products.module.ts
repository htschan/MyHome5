import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { AuthService } from '../shared/auth.service';
import { ProductService } from '../shared/product.service';

@NgModule({
    imports: [
        ProductsRoutingModule,
        CommonModule
    ],
    declarations: [ProductsComponent],
    providers: [AuthService, ProductService]
})
export class ProductsModule { }
