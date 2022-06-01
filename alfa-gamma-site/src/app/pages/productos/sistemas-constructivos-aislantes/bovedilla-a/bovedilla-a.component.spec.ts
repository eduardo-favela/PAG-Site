import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovedillaAComponent } from './bovedilla-a.component';

describe('BovedillaAComponent', () => {
  let component: BovedillaAComponent;
  let fixture: ComponentFixture<BovedillaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovedillaAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovedillaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
