import { Component, input, output, signal } from '@angular/core';
import { ITicket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<ITicket>();
  close = output();
  detailsVisible = signal<boolean>(false);

  onToggleDetails() {
   // this.detailsVisible.set(!this.detailsVisible);
   this.detailsVisible.update((visible) => !visible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
