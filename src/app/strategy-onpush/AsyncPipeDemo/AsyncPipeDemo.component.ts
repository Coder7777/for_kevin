import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-AsyncPipeDemo',
  templateUrl: './AsyncPipeDemo.component.html',
  styleUrls: ['./AsyncPipeDemo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AsyncPipeDemoComponent implements OnInit {

  public content$: BehaviorSubject<string> = new BehaviorSubject<string>("Hello");

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.content$.next(`${this.content$.value} Modern Beauty`);
    }, 2000);
  }

}
