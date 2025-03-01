import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbAccordionModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { CountUpModule } from 'ngx-countup';
import { ScrollspyDirective } from './scrollspy.directive';
import { LandingScrollspyDirective } from './landingscrollspy.directive';
import { BlogComponent } from './landing/blog/blog.component';
import { CandidatesComponent } from './landing/candidates/candidates.component';
import { FindjobsComponent } from './landing/findjobs/findjobs.component';
import { JobFooterComponent } from './landing/job-footer/job-footer.component';
import { JobcategoriesComponent } from './landing/jobcategories/jobcategories.component';
import { ProcessComponent } from './landing/process/process.component';



@NgModule({
  declarations: [
    ProcessComponent,
    FindjobsComponent,
    CandidatesComponent,
    BlogComponent,
    JobcategoriesComponent,
    JobFooterComponent,
    ScrollspyDirective,
    LandingScrollspyDirective
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbDropdownModule,
    SlickCarouselModule,
    CountUpModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [ScrollspyDirective, LandingScrollspyDirective, ProcessComponent, FindjobsComponent, CandidatesComponent, BlogComponent, JobcategoriesComponent, JobFooterComponent]
})
export class SharedModule { }
