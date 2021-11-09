import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-InputDemo',
  templateUrl: './InputDemo.component.html',
  styleUrls: ['./InputDemo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDemoComponent implements OnInit {

  public fatherContent: string = "Hello";

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.fatherContent = `${this.fatherContent} Modern Beauty`;
    }, 2000);
  }

}
