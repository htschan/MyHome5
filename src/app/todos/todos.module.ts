import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { AuthService } from '../shared/auth.service';
import { ProductService } from '../shared/product.service';

@NgModule({
    imports: [
        TodosRoutingModule,
        CommonModule
    ],
    declarations: [TodosComponent],
    providers: [AuthService, ProductService]
})
export class TodosModule { }
