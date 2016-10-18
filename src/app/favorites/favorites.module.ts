import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { AuthService } from '../shared/auth.service';
import { ProductService } from '../shared/product.service';

@NgModule({
    imports: [
        FavoritesRoutingModule,
        CommonModule
    ],
    declarations: [FavoritesComponent],
    providers: [AuthService, ProductService]
})
export class FavoritesModule { }
