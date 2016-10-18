import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ShoppinglistComponent } from './shoppinglist.component';
import { ShoppinglistRoutingModule } from './shoppinglist-routing.module';
import { AuthService } from '../shared/auth.service';
import { ProductService } from '../shared/product.service';

@NgModule({
    imports: [
        ShoppinglistRoutingModule,
        CommonModule
    ],
    declarations: [ShoppinglistComponent],
    providers: [AuthService, ProductService]
})
export class ShoppinglistModule { }
