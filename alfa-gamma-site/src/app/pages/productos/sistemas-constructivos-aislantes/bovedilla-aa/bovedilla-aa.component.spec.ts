import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovedillaAaComponent } from './bovedilla-aa.component';

describe('BovedillaAaComponent', () => {
  let component: BovedillaAaComponent;
  let fixture: ComponentFixture<BovedillaAaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovedillaAaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovedillaAaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
