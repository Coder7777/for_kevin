import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ChangeDetectiveRefDemo',
  templateUrl: './ChangeDetectiveRefDemo.component.html',
  styleUrls: ['./ChangeDetectiveRefDemo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectiveRefDemoComponent implements OnInit {

  public content: string = "Hello";

  constructor(
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.content = `${this.content} Modern Beauty`;
      this._cdr.markForCheck();
    }, 2000);
  }

}
