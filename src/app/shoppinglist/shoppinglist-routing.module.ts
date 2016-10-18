import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { ShoppinglistComponent } from './shoppinglist.component';
import { AuthService } from '../shared/auth.service';

const routes: Routes = [
    {
        path: '',
        component: ShoppinglistComponent,
        data: {
            title: 'Receipts'
        },
        canActivate: [AuthService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppinglistRoutingModule { }
