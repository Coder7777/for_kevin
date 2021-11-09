import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-EventEmitDemo',
  templateUrl: './EventEmitDemo.component.html',
  styleUrls: ['./EventEmitDemo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EventEmitDemoComponent implements OnInit {

  public content: string = "Hello";

  constructor() { }

  ngOnInit() {
  }

  public onChangeMeClick() {
    this.content = `${this.content} Modern Beauty`;
  }

}
