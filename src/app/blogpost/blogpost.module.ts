import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailsComponent } from './blogpost-details/blogpost-details.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [BlogpostFeaturedComponent, BlogpostListComponent, BlogpostDetailsComponent, BlogpostRecentComponent, CategoriesComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports: [
    BlogpostFeaturedComponent,
    BlogpostListComponent
  ]
})
export class BlogpostModule { }
