import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbAlert} from './alert';
import {NgbAlertConfig} from './alert-config';

export {NgbAlert} from './alert';
export {NgbAlertConfig} from './alert-config';

@NgModule({declarations: [NgbAlert], exports: [NgbAlert], imports: [CommonModule], entryComponents: [NgbAlert]})
export class NgbAlertModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbAlertModule, providers: [NgbAlertConfig]}; }
}
