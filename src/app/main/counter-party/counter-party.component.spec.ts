import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterPartyComponent } from './counter-party.component';


describe('CounterPartyComponent', () => {
  let component: CounterPartyComponent;
  let fixture: ComponentFixture<CounterPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterPartyComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
