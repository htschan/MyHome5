import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { LocationStrategy,
         HashLocationStrategy }         from '@angular/common';
import { AngularFireModule }            from 'angularfire2';         

import { AppComponent }                 from './app.component';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './shared/nav-dropdown.directive';

import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './shared/sidebar.directive';
import { AsideToggleDirective }         from './shared/aside.directive';
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';

/* Routing Module */
import { AppRoutingModule }             from './app.routing';

//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';
import { ProfileModalComponent }        from './layouts/profile-modal.component';

import { AppConfig }                    from '../../../../myhomeappconfig'


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        Ng2BootstrapModule,
        ChartsModule,
        AngularFireModule.initializeApp(AppConfig.firebaseConfig) // see remark at bottom of this file
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        SimpleLayoutComponent,
        ProfileModalComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

/*
A sample AppConfig which you can place outside of source control

export class AppConfig {

  static firebaseConfig: any = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-yyyyy",
    authDomain: "aaaaaa-bbbbb.firebaseapp.com",
    databaseURL: "https://aaaaaa-bbbbb.firebaseio.com",
    storageBucket: "aaaaaa-bbbbb.appspot.com",
    messagingSenderId: "11111111111111"
  };
  
}
*/