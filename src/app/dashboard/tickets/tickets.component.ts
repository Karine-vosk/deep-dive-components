import { TicketComponent } from './ticket/ticket.component';
import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { INewTicket, ITicket } from './ticket/ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: ITicket[] = [];

  addTicket(ticketData: INewTicket): void {
    const ticket: ITicket = {
      title: ticketData.title,
      text: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === id) {
        return {...ticket, status: 'closed'};
      }
      return ticket;
    })
  }
}
