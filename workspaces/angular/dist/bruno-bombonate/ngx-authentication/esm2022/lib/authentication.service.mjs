import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class AuthenticationService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JydW5vLWJvbWJvbmF0ZS9uZ3gtYXV0aGVudGljYXRpb24vc3JjL2xpYi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQUttQixlQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBMENuRDtJQXhDUSxpQkFBaUIsQ0FBQyxjQUFtQixFQUFFLFVBQW1CO1FBQy9ELElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDdkMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEQsVUFBVTtnQkFDUixDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7SUFDSCxDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sMEJBQTBCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sNEJBQTRCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlFLElBQUksMEJBQTBCLEVBQUUsQ0FBQztnQkFDL0IsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUMxRCxDQUFDO2lCQUFNLElBQUksNEJBQTRCLEVBQUUsQ0FBQztnQkFDeEMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUM1RCxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxtQkFBbUI7UUFDeEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN2QyxZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDMUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVTtRQUNmLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sMEJBQTBCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sNEJBQTRCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlFLFVBQVUsR0FBRywwQkFBMEIsSUFBSSw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekYsQ0FBQztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7OEdBMUNVLHFCQUFxQjtrSEFBckIscUJBQXFCLGNBRnBCLE1BQU07OzJGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZCA9IGluamVjdChQTEFURk9STV9JRCk7XHJcblxyXG4gIHB1YmxpYyBzZXRBdXRoZW50aWNhdGlvbihhdXRoZW50aWNhdGlvbjogYW55LCByZW1lbWJlck1lOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICBhdXRoZW50aWNhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGF1dGhlbnRpY2F0aW9uKTtcclxuICAgICAgcmVtZW1iZXJNZVxyXG4gICAgICAgID8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhlbnRpY2F0aW9uJywgYXV0aGVudGljYXRpb24pXHJcbiAgICAgICAgOiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGlvbicsIGF1dGhlbnRpY2F0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBdXRoZW50aWNhdGlvbigpOiBudWxsIHwgYW55IHtcclxuICAgIGxldCBhdXRoZW50aWNhdGlvbiA9IG51bGw7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICBjb25zdCBsb2NhbFN0b3JhZ2VBdXRoZW50aWNhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoZW50aWNhdGlvbicpO1xyXG4gICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZUF1dGhlbnRpY2F0aW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYXV0aGVudGljYXRpb24nKTtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZUF1dGhlbnRpY2F0aW9uKSB7XHJcbiAgICAgICAgYXV0aGVudGljYXRpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZUF1dGhlbnRpY2F0aW9uKTtcclxuICAgICAgfSBlbHNlIGlmIChzZXNzaW9uU3RvcmFnZUF1dGhlbnRpY2F0aW9uKSB7XHJcbiAgICAgICAgYXV0aGVudGljYXRpb24gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlQXV0aGVudGljYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXV0aGVudGljYXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5zZXRBdXRoZW50aWNhdGlvbigpOiB2b2lkIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoZW50aWNhdGlvbicpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoZW50aWNhdGlvbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlQXV0aGVudGljYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aGVudGljYXRpb24nKTtcclxuICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VBdXRoZW50aWNhdGlvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGhlbnRpY2F0aW9uJyk7XHJcbiAgICAgIGlzTG9nZ2VkSW4gPSBsb2NhbFN0b3JhZ2VBdXRoZW50aWNhdGlvbiB8fCBzZXNzaW9uU3RvcmFnZUF1dGhlbnRpY2F0aW9uID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzTG9nZ2VkSW47XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=