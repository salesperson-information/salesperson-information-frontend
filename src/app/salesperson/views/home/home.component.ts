import { Component } from '@angular/core';
import { SalespersonTableComponent } from '../../component/salesperson-table/salesperson-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SalespersonTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
