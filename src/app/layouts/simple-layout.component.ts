import { Component, OnInit }        from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: '<div class="container-fluid"><router-outlet></router-outlet></div>',
})
export class SimpleLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }
}
