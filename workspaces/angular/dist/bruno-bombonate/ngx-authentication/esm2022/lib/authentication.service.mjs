import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class AuthenticationService {
    constructor(platformId) {
        this.platformId = platformId;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AuthenticationService, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AuthenticationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2JydW5vLWJvbWJvbmF0ZS9uZ3gtYXV0aGVudGljYXRpb24vc3JjL2xpYi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUVtQixVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztJQUM5QixDQUFDO0lBRUUsaUJBQWlCLENBQUMsY0FBbUIsRUFBRSxVQUFtQjtRQUMvRCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoRCxVQUFVO2dCQUNSLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxNQUFNLDBCQUEwQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRSxNQUFNLDRCQUE0QixHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5RSxJQUFJLDBCQUEwQixFQUFFO2dCQUM5QixjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNLElBQUksNEJBQTRCLEVBQUU7Z0JBQ3ZDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDM0Q7U0FDRjtRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxtQkFBbUI7UUFDeEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sMEJBQTBCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sNEJBQTRCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlFLFVBQVUsR0FBRywwQkFBMEIsSUFBSSw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDeEY7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzhHQTdDVSxxQkFBcUIsa0JBR3RCLFdBQVc7a0hBSFYscUJBQXFCLGNBRnBCLE1BQU07OzJGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUlJLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnlcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgc2V0QXV0aGVudGljYXRpb24oYXV0aGVudGljYXRpb246IGFueSwgcmVtZW1iZXJNZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgYXV0aGVudGljYXRpb24gPSBKU09OLnN0cmluZ2lmeShhdXRoZW50aWNhdGlvbik7XHJcbiAgICAgIHJlbWVtYmVyTWVcclxuICAgICAgICA/IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGlvbicsIGF1dGhlbnRpY2F0aW9uKVxyXG4gICAgICAgIDogc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYXV0aGVudGljYXRpb24nLCBhdXRoZW50aWNhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QXV0aGVudGljYXRpb24oKTogbnVsbCB8IGFueSB7XHJcbiAgICBsZXQgYXV0aGVudGljYXRpb24gPSBudWxsO1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlQXV0aGVudGljYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aGVudGljYXRpb24nKTtcclxuICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VBdXRoZW50aWNhdGlvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGhlbnRpY2F0aW9uJyk7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2VBdXRoZW50aWNhdGlvbikge1xyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VBdXRoZW50aWNhdGlvbik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2Vzc2lvblN0b3JhZ2VBdXRoZW50aWNhdGlvbikge1xyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZUF1dGhlbnRpY2F0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuc2V0QXV0aGVudGljYXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aGVudGljYXRpb24nKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aGVudGljYXRpb24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUF1dGhlbnRpY2F0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhlbnRpY2F0aW9uJyk7XHJcbiAgICAgIGNvbnN0IHNlc3Npb25TdG9yYWdlQXV0aGVudGljYXRpb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhdXRoZW50aWNhdGlvbicpO1xyXG4gICAgICBpc0xvZ2dlZEluID0gbG9jYWxTdG9yYWdlQXV0aGVudGljYXRpb24gfHwgc2Vzc2lvblN0b3JhZ2VBdXRoZW50aWNhdGlvbiA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0xvZ2dlZEluO1xyXG4gIH1cclxuXHJcbn1cclxuIl19