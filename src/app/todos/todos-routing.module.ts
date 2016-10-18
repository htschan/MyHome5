import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { TodosComponent } from './todos.component';
import { AuthService } from '../shared/auth.service';

const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
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
export class TodosRoutingModule { }
