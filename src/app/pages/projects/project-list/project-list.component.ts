import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../../../models/project-models/project';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public projects: Observable<Project[]>;

  constructor(private projService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projService.getProjects();
  }
}
