import { Observable } from 'rxjs';
import { Toast } from '../interfaces/toast.interface';
import * as i0 from "@angular/core";
export declare class ToastService {
    private readonly _send;
    get send$(): Observable<Toast>;
    private set send(value);
    success(message: string): void;
    error(message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
