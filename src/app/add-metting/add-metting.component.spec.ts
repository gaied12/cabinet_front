import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMettingComponent } from './add-metting.component';

describe('AddMettingComponent', () => {
  let component: AddMettingComponent;
  let fixture: ComponentFixture<AddMettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
