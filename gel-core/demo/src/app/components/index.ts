
export * from './tooltip';


import {NgModule} from '@angular/core';

import {NgbdSharedModule} from '../shared';

import {NgbdTooltipModule} from './tooltip';


@NgModule({
  imports: [
    NgbdSharedModule,
    NgbdTooltipModule
  ],
  exports: [
    NgbdTooltipModule
  ]
})
export class NgbdDemoModule {}
