import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlTipComponent } from './form-control-tip.component';

describe('FormControlTipComponent', () => {
  let component: FormControlTipComponent;
  let fixture: ComponentFixture<FormControlTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
