import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubCompComponent implements OnInit {

  @Input() userName: string = "empty";

  constructor() { }

  ngOnInit() {
  }

}
