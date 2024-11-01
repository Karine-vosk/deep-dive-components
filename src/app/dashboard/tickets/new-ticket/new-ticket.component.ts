import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  input,
  OnInit,
  output,
  Output,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { AddTicket } from '../../../../../.history/src/app/dashboard/tickets/ticket/ticket.model_20241031155232';
import { INewTicket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  //@Output() add = new EventEmitter();
  add = output<INewTicket>();

  ngOnInit(): void {
    console.log('oninit');
    console.log(this.form().nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.form().nativeElement);

  }

  onSubmit(title: string, request: string) {
  //   console.log(this.form(), 'submitted');
  //   console.log(title, '/', request);
    this.add.emit({title: title, text: request});
    this.form().nativeElement.reset();
  }
}
