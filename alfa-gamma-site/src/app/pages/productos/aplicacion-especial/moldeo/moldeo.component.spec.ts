import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldeoComponent } from './moldeo.component';

describe('MoldeoComponent', () => {
  let component: MoldeoComponent;
  let fixture: ComponentFixture<MoldeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoldeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoldeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
