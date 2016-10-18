import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { ReceiptsComponent } from './receipts.component';
import { AuthService } from '../shared/auth.service';

const routes: Routes = [
    {
        path: '',
        component: ReceiptsComponent,
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
export class ReceiptsRoutingModule { }
