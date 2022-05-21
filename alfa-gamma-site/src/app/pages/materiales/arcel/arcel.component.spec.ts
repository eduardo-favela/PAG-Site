import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcelComponent } from './arcel.component';

describe('ArcelComponent', () => {
  let component: ArcelComponent;
  let fixture: ComponentFixture<ArcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
