import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersEditComponent } from './speakers-edit.component';

describe('SpeakersEditComponent', () => {
  let component: SpeakersEditComponent;
  let fixture: ComponentFixture<SpeakersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
