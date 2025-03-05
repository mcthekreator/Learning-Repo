import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponentComponent } from './events-component.component';

describe('EventsComponentComponent', () => {
  let component: EventsComponentComponent;
  let fixture: ComponentFixture<EventsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
