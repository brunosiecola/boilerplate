import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilerplateToastComponent } from './boilerplate-toast.component';

describe('BoilerplateToastComponent', () => {
  let component: BoilerplateToastComponent;
  let fixture: ComponentFixture<BoilerplateToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoilerplateToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoilerplateToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
