import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../shared';
import { ViewEncapsulation } from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html',
    providers: [AuthService]
})
export class FullLayoutComponent implements OnInit {
    auth: FirebaseAuthState;

    constructor(private af: AngularFire, private authService: AuthService) {
        this.af.auth.subscribe(auth => this.auth = auth);
    }

    public disabled: boolean = false;

    public status: { isopen: boolean } = { isopen: false };

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    logout() {
        this.authService.logout();
    }

    loginGoogle() {
        this.authService.loginGoogle();
    }

    ngOnInit(): void {
        this.auth = this.authService.auth;
    }
}
