import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { ControlTipComponent } from './components/control-tip/control-tip.component';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import * as i0 from "@angular/core";
export class FormsModule {
    static forRoot(controlErrorsCustom) {
        return {
            ngModule: FormsModule,
            providers: [
                { provide: 'controlErrorsCustom', useValue: controlErrorsCustom }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: FormsModule, declarations: [
            // components
            ControlTipComponent,
            ControlErrorComponent], imports: [CommonModule], exports: [
            // components
            ControlTipComponent,
            ControlErrorComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        // components
                        ControlTipComponent,
                        ControlErrorComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        // components
                        ControlTipComponent,
                        ControlErrorComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnJ1bm8tYm9tYm9uYXRlL25neC1mb3Jtcy9zcmMvbGliL2Zvcm1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsYUFBYTtBQUNiLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOztBQW9CM0YsTUFBTSxPQUFPLFdBQVc7SUFFZixNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQztRQUN2RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTthQUNsRTtTQUNGLENBQUM7SUFDSixDQUFDOzhHQVRVLFdBQVc7K0dBQVgsV0FBVztZQWJwQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLHFCQUFxQixhQUdyQixZQUFZO1lBR1osYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixxQkFBcUI7K0dBR1osV0FBVyxZQVJwQixZQUFZOzsyRkFRSCxXQUFXO2tCQWZ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLHFCQUFxQjtxQkFDdEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBDb250cm9sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wtdGlwL2NvbnRyb2wtdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sLWVycm9yL2NvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcclxuXHJcbi8vIGludGVyZmFjZXNcclxuaW1wb3J0IHsgQ29udHJvbEVycm9ycyB9IGZyb20gJy4vaW50ZXJmYWNlcy9jb250cm9sLWVycm9ycy5pbnRlcmZhY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC8vIGNvbXBvbmVudHNcclxuICAgIENvbnRyb2xUaXBDb21wb25lbnQsXHJcbiAgICBDb250cm9sRXJyb3JDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLy8gY29tcG9uZW50c1xyXG4gICAgQ29udHJvbFRpcENvbXBvbmVudCxcclxuICAgIENvbnRyb2xFcnJvckNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1zTW9kdWxlIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbnRyb2xFcnJvcnNDdXN0b20/OiBDb250cm9sRXJyb3JzKTogTW9kdWxlV2l0aFByb3ZpZGVyczxGb3Jtc01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvcm1zTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6ICdjb250cm9sRXJyb3JzQ3VzdG9tJywgdXNlVmFsdWU6IGNvbnRyb2xFcnJvcnNDdXN0b20gfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19