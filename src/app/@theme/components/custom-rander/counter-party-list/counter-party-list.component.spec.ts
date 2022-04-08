import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartyListComponent } from './counter-party-list.component';

describe('CounterPartyListComponent', () => {
  let component: CounterPartyListComponent;
  let fixture: ComponentFixture<CounterPartyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPartyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
