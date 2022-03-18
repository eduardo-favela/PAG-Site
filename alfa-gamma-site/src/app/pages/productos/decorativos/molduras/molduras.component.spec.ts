import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldurasComponent } from './molduras.component';

describe('MoldurasComponent', () => {
  let component: MoldurasComponent;
  let fixture: ComponentFixture<MoldurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoldurasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoldurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
