import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule],
  declarations: [ProjectComponent, ProjectListComponent]
})
export class ProjectsModule {}
