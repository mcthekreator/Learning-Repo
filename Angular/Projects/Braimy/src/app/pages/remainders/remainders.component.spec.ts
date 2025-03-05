import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemaindersComponent } from './remainders.component';

describe('RemaindersComponent', () => {
  let component: RemaindersComponent;
  let fixture: ComponentFixture<RemaindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemaindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemaindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
