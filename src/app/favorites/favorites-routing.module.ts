import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { FavoritesComponent } from './favorites.component';
import { AuthService } from '../shared/auth.service';

const routes: Routes = [
    {
        path: '',
        component: FavoritesComponent,
        data: {
            title: 'Favorites'
        },
        canActivate: [AuthService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FavoritesRoutingModule { }
