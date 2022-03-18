import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerlitaComponent } from './perlita.component';

describe('PerlitaComponent', () => {
  let component: PerlitaComponent;
  let fixture: ComponentFixture<PerlitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerlitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerlitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
