import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RShieldComponent } from './r-shield.component';

describe('RShieldComponent', () => {
  let component: RShieldComponent;
  let fixture: ComponentFixture<RShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RShieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
