import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  contentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Configuration, Configuration2 } from './model';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  //   '(click)': 'onClick()',
  // },
})
export class ControlComponent implements AfterContentInit {
  @HostBinding('class') className = 'control';

  // @HostListener('click', ['$event.target.value'])
  //  onClick(e: any) {
  //   console.log(e, 'click from ');
  //  }
  label = input.required<string>();
  private el = inject(ElementRef);
  //@ContentChild('input') control?: ElementRef<HTMLInputElement>;
  control = contentChild.required<ElementRef<HTMLInputElement>>('input');
  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngOnInit(): void {
    const exampleConfiguration = new Configuration();
    console.log(exampleConfiguration.appName); // "MyApp"

    console.log(Configuration2.appName, 'k'); // "MyApp"
  }

  ngAfterContentInit(): void {
    console.log();
  }

  onClick() {
    console.log(this.el, 'click');
    console.dir(this.control().nativeElement);
  }
}
