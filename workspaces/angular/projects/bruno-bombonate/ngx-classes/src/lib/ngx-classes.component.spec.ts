import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxClassesComponent } from './ngx-classes.component';

describe('NgxClassesComponent', () => {
  let component: NgxClassesComponent;
  let fixture: ComponentFixture<NgxClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
