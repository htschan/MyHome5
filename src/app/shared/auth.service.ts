import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
    auth: FirebaseAuthState;

    constructor(private af: AngularFire) {
        this.af.auth.subscribe(auth => this.auth = auth);
    }
    canActivate() {
        return this.auth != null;
    }
    loggedIn() {
        return this.auth != null;
    }
    logout() {
        this.af.auth.logout();
    }
    loginEmail(email: string, password: string) {
        this.af.auth.login({
            email: email,
            password: password
        },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            });
    }
    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Redirect,
        });
    }
    loginFacebook() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Redirect,
            scope: ["email"]
        });
    }
    loginTwitter() {
        this.af.auth.login({
            provider: AuthProviders.Twitter,
            method: AuthMethods.Redirect,
        });
    }
    overrideLogin() {
        this.af.auth.login({
            provider: AuthProviders.Anonymous,
            method: AuthMethods.Anonymous,
        });
    }
}
