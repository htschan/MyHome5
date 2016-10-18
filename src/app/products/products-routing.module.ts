import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { ProductsComponent } from './products.component';
import { AuthService } from '../shared/auth.service';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        data: {
            title: 'Products'
        },
        canActivate: [AuthService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
