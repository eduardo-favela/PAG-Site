import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfatermComponent } from './alfaterm.component';

describe('AlfatermComponent', () => {
  let component: AlfatermComponent;
  let fixture: ComponentFixture<AlfatermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfatermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfatermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
