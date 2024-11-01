import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ServesStatus } from '../../shared/control/model';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<ServesStatus>('offline');
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus(), 'st');
    });
  }

  ngOnInit(): void {
    console.log('on init');
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('offline');
      } else if (rnd < 0.9) {
        this.currentStatus.set('online');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  //   console.log('destroy');
  // }
}
