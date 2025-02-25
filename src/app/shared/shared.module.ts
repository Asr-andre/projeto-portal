import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbAccordionModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Counter
import { CountUpModule } from 'ngx-countup';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ScrollspyDirective } from './scrollspy.directive';
import { LandingScrollspyDirective } from './landingscrollspy.directive';

// Job Landing 
import { ProcessComponent } from './landing/job/process/process.component';
import { FindjobsComponent } from './landing/job/findjobs/findjobs.component';
import { CandidatesComponent } from './landing/job/candidates/candidates.component';
import { BlogComponent } from './landing/job/blog/blog.component';
import { JobcategoriesComponent } from './landing/job/jobcategories/jobcategories.component';
import { JobFooterComponent } from './landing/job/job-footer/job-footer.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
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
  exports: [BreadcrumbsComponent, ScrollspyDirective, LandingScrollspyDirective, ProcessComponent, FindjobsComponent, CandidatesComponent, BlogComponent, JobcategoriesComponent, JobFooterComponent]
})
export class SharedModule { }
