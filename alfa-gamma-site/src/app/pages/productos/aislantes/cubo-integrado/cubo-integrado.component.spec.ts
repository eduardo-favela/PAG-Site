import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboIntegradoComponent } from './cubo-integrado.component';

describe('CuboIntegradoComponent', () => {
  let component: CuboIntegradoComponent;
  let fixture: ComponentFixture<CuboIntegradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuboIntegradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuboIntegradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
