import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgbTooltipModule} from './tooltip/tooltip.module';
import {NgbCollapseModule} from './collapse/collapse.module';
export {NgbTooltipModule, NgbTooltipConfig, NgbTooltip} from './tooltip/tooltip.module';
import {NgbTabsetModule, NgbTabChangeEvent} from './tabset/tabset.module';
export {
  NgbTabsetModule,
  NgbTabChangeEvent,
  NgbTabsetConfig,
  NgbTabset,
  NgbTab,
  NgbTabContent,
  NgbTabTitle
} from './tabset/tabset.module';
import {NgbAlertModule} from './alert/alert.module';
export {Placement} from './util/positioning';
export {NgbCollapseModule, NgbCollapse} from './collapse/collapse.module';
export {NgbAlertModule, NgbAlertConfig, NgbAlert} from './alert/alert.module';
const NGB_MODULES = [
   NgbTooltipModule, NgbTabsetModule, NgbCollapseModule,NgbAlertModule
];

@NgModule({
  imports: [NgbAlertModule.forRoot(),
   NgbTooltipModule.forRoot(), NgbTabsetModule.forRoot(), NgbCollapseModule.forRoot(),
  ],
  exports: NGB_MODULES
})
export class NgbRootModule {
}

@NgModule({imports: NGB_MODULES, exports: NGB_MODULES})
export class NgbModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbRootModule}; }
}
