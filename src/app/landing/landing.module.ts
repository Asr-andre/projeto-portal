import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule, NgbTooltipModule, NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { LandingRoutingModule } from "./landing-routing.module";
import { SharedModule } from '../shared/shared.module';
import { JobComponent } from './job/job.component';
import { DiretivasModule } from '../conf/directve.module';

@NgModule({
  declarations: [
    JobComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    DiretivasModule,
    LandingRoutingModule,
    SharedModule,
    NgbTooltipModule,
    NgbCollapseModule,
    ScrollToModule.forRoot(),
  ]
})
export class LandingModule { }
