import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import Salesperson from '../../models/Salesperson';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { SalespersonService } from '../../services/salesperson.service';

@Component({
  selector: 'app-salesperson-table',
  standalone: true,
  imports: [
    TableModule,
    ToolbarModule,
    SplitButtonModule,
    MenuModule,
    InputTextModule,
  ],
  templateUrl: './salesperson-table.component.html',
  styleUrl: './salesperson-table.component.scss',
  providers: [SalespersonService],
})
export class SalespersonTableComponent {
  salespeople: Salesperson[] = [];

  constructor(private salespersonService: SalespersonService) {}

  ngOnInit(): void {
    this.loadSalespeople();
  }

  loadSalespeople(): void {
    this.salespersonService.getSalespeople(0, 200).subscribe((data) => {
      this.salespeople = data;
      console.log(data);
    });
  }
}
