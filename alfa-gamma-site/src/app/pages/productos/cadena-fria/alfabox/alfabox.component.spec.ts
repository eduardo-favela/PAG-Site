import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaboxComponent } from './alfabox.component';

describe('AlfaboxComponent', () => {
  let component: AlfaboxComponent;
  let fixture: ComponentFixture<AlfaboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfaboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfaboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
