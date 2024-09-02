import * as i0 from "@angular/core";
export declare class AuthenticationService {
    private readonly platformId;
    constructor(platformId: any);
    setAuthentication(authentication: any, rememberMe: boolean): void;
    getAuthentication(): null | any;
    unsetAuthentication(): void;
    isLoggedIn(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthenticationService>;
}
