import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovedillaEComponent } from './bovedilla-e.component';

describe('BovedillaEComponent', () => {
  let component: BovedillaEComponent;
  let fixture: ComponentFixture<BovedillaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovedillaEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovedillaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
