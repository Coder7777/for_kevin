import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipeDemoComponent } from './AsyncPipeDemo/AsyncPipeDemo.component';
import { ChangeDetectiveRefDemoComponent } from './ChangeDetectiveRefDemo/ChangeDetectiveRefDemo.component';
import { EventEmitDemoComponent } from './EventEmitDemo/EventEmitDemo.component';
import { InputDemoComponent } from './InputDemo/InputDemo.component';
import { IonicModule } from '@ionic/angular';
import { StrategyOnpushRoutingModule } from './strategy-onpush-routing.module';
import { ReceiveInputComponent } from './InputDemo/receive-input/receive-input.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StrategyOnpushRoutingModule
  ],
  declarations: [
    AsyncPipeDemoComponent,
    ChangeDetectiveRefDemoComponent,
    EventEmitDemoComponent,
    InputDemoComponent,
    ReceiveInputComponent
  ]
})
export class StrategyOnpushModule { }
