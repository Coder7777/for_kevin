import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage implements OnInit {

  public test: string = "Hello World";

  public test$: BehaviorSubject<string> = new BehaviorSubject<string>("Hello World");
  
  public userName: string = "MBS";

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.test += " Modern Beauty";
      this.cdr.markForCheck();
    }, 1500);


    setTimeout(() => {
      this.test$.next(this.test$.value + " It department");
    }, 3000);


    setTimeout(() => {
      this.userName = "Modern Beauty";
    }, 1000);
  }

  // event emit  --- ok
  // asyncpipe  --- ok
  // @input  --- ok
  // cdr.markForCheck(); --- ok

  clickMe() {
    this.test += " Modern Beauty";
  }


}
