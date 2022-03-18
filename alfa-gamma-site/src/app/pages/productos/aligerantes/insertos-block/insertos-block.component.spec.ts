import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertosBlockComponent } from './insertos-block.component';

describe('InsertosBlockComponent', () => {
  let component: InsertosBlockComponent;
  let fixture: ComponentFixture<InsertosBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertosBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertosBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
