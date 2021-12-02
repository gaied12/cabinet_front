import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRendezVousComponent } from './all-rendez-vous.component';

describe('AllRendezVousComponent', () => {
  let component: AllRendezVousComponent;
  let fixture: ComponentFixture<AllRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
