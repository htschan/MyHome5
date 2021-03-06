import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';
import { SimpleLayoutComponent }    from './layouts/simple-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'shoppinglist',
                loadChildren: 'app/shoppinglist/shoppinglist.module#ShoppinglistModule'
            },
            {
                path: 'favorites',
                loadChildren: 'app/favorites/favorites.module#FavoritesModule'
            },
            {
                path: 'products',
                loadChildren: 'app/products/products.module#ProductsModule'
            },
            {
                path: 'receipts',
                loadChildren: 'app/receipts/receipts.module#ReceiptsModule'
            },
            {
                path: 'todos',
                loadChildren: 'app/todos/todos.module#TodosModule'
            },
            {
                path: 'components',
                loadChildren: 'app/components/components.module#ComponentsModule'
            },
            {
                path: 'icons',
                loadChildren: 'app/icons/icons.module#IconsModule'
            },
            {
                path: 'widgets',
                loadChildren: 'app/widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'charts',
                loadChildren: 'app/chartjs/chartjs.module#ChartJSModule'
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: 'app/pages/pages.module#PagesModule',
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
