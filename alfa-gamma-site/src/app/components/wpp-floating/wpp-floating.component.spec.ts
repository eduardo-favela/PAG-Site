import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WppFloatingComponent } from './wpp-floating.component';

describe('WppFloatingComponent', () => {
  let component: WppFloatingComponent;
  let fixture: ComponentFixture<WppFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WppFloatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WppFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
