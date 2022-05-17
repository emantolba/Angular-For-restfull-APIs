import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdEventsComponent } from './std-events.component';

describe('StdEventsComponent', () => {
  let component: StdEventsComponent;
  let fixture: ComponentFixture<StdEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
