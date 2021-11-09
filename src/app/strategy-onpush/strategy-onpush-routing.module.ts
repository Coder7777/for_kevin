import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AsyncPipeDemoComponent } from './AsyncPipeDemo/AsyncPipeDemo.component';
import { ChangeDetectiveRefDemoComponent } from './ChangeDetectiveRefDemo/ChangeDetectiveRefDemo.component';
import { EventEmitDemoComponent } from './EventEmitDemo/EventEmitDemo.component';
import { InputDemoComponent } from './InputDemo/InputDemo.component';

const routes: Routes = [
  { path: 'asyncpipe', component: AsyncPipeDemoComponent },
  { path: 'input', component: InputDemoComponent },
  { path: 'eventemit', component: EventEmitDemoComponent },
  { path: 'cdr', component: ChangeDetectiveRefDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrategyOnpushRoutingModule { }
