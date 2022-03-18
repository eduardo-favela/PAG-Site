import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmvicComponent } from './amvic.component';

describe('AmvicComponent', () => {
  let component: AmvicComponent;
  let fixture: ComponentFixture<AmvicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmvicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmvicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
