import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ReceiptsComponent } from './receipts.component';
import { ReceiptsRoutingModule } from './receipts-routing.module';
import { AuthService } from '../shared/auth.service';
import { ProductService } from '../shared/product.service';

@NgModule({
    imports: [
        ReceiptsRoutingModule,
        CommonModule
    ],
    declarations: [ReceiptsComponent],
    providers: [AuthService, ProductService]
})
export class ReceiptsModule { }
