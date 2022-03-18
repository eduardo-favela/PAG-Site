import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HieleraComponent } from './hielera.component';

describe('HieleraComponent', () => {
  let component: HieleraComponent;
  let fixture: ComponentFixture<HieleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HieleraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HieleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
