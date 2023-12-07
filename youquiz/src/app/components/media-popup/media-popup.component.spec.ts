import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPopupComponent } from './media-popup.component';

describe('MediaPopupComponent', () => {
  let component: MediaPopupComponent;
  let fixture: ComponentFixture<MediaPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaPopupComponent]
    });
    fixture = TestBed.createComponent(MediaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
