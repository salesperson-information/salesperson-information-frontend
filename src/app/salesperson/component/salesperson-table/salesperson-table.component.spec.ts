import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonTableComponent } from './salesperson-table.component';

describe('SalespersonTableComponent', () => {
  let component: SalespersonTableComponent;
  let fixture: ComponentFixture<SalespersonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalespersonTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalespersonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
