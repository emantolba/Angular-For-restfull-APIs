import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerEventsComponent } from './speaker-events.component';

describe('SpeakerEventsComponent', () => {
  let component: SpeakerEventsComponent;
  let fixture: ComponentFixture<SpeakerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
