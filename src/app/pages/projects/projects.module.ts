import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: ':id', component: ProjectComponent }
];

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule, RouterModule.forChild(routes)],
  declarations: [ProjectComponent, ProjectListComponent]
})
export class ProjectsModule {}
