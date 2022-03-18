import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeosystemComponent } from './geosystem.component';

describe('GeosystemComponent', () => {
  let component: GeosystemComponent;
  let fixture: ComponentFixture<GeosystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeosystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
