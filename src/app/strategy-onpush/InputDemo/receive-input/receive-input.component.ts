import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receive-input',
  templateUrl: './receive-input.component.html',
  styleUrls: ['./receive-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReceiveInputComponent implements OnInit {

  @Input() content: string = "Hello";

  constructor() { }

  ngOnInit() {
  }

}
