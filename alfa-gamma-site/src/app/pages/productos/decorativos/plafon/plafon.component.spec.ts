import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlafonComponent } from './plafon.component';

describe('PlafonComponent', () => {
  let component: PlafonComponent;
  let fixture: ComponentFixture<PlafonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlafonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlafonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
