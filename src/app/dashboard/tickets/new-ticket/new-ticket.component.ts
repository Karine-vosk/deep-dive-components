import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnInit,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
   @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('oninit');
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.form?.nativeElement);

  }

  onSubmit(title: string, request: string) {
    console.log(this.form);
    console.log(title, '/', request);

    this.form?.nativeElement.reset();
  }
}
