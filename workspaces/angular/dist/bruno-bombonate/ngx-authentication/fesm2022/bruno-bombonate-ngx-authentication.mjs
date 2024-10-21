import * as i0 from '@angular/core';
import { inject, PLATFORM_ID, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

class AuthenticationService {
    constructor() {
        this.platformId = inject(PLATFORM_ID);
    }
    setAuthentication(authentication, rememberMe) {
        if (isPlatformBrowser(this.platformId)) {
            authentication = JSON.stringify(authentication);
            rememberMe
                ? localStorage.setItem('authentication', authentication)
                : sessionStorage.setItem('authentication', authentication);
        }
    }
    getAuthentication() {
        let authentication = null;
        if (isPlatformBrowser(this.platformId)) {
            const localStorageAuthentication = localStorage.getItem('authentication');
            const sessionStorageAuthentication = sessionStorage.getItem('authentication');
            if (localStorageAuthentication) {
                authentication = JSON.parse(localStorageAuthentication);
            }
            else if (sessionStorageAuthentication) {
                authentication = JSON.parse(sessionStorageAuthentication);
            }
        }
        return authentication;
    }
    unsetAuthentication() {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('authentication');
            sessionStorage.removeItem('authentication');
        }
    }
    isLoggedIn() {
        let isLoggedIn = false;
        if (isPlatformBrowser(this.platformId)) {
            const localStorageAuthentication = localStorage.getItem('authentication');
            const sessionStorageAuthentication = sessionStorage.getItem('authentication');
            isLoggedIn = localStorageAuthentication || sessionStorageAuthentication ? true : false;
        }
        return isLoggedIn;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AuthenticationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AuthenticationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/*
 * Public API Surface of ngx-authentication
 */
// services

/**
 * Generated bundle index. Do not edit.
 */

export { AuthenticationService };
//# sourceMappingURL=bruno-bombonate-ngx-authentication.mjs.map
