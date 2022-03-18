import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCanaComponent } from './media-cana.component';

describe('MediaCanaComponent', () => {
  let component: MediaCanaComponent;
  let fixture: ComponentFixture<MediaCanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
