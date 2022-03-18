import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasetonComponent } from './caseton.component';

describe('CasetonComponent', () => {
  let component: CasetonComponent;
  let fixture: ComponentFixture<CasetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasetonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
