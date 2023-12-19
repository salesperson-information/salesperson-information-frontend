import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonCardComponent } from './salesperson-card.component';

describe('SalespersonCardComponent', () => {
  let component: SalespersonCardComponent;
  let fixture: ComponentFixture<SalespersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalespersonCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalespersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
