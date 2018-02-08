import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project-models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private projects: Project[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      {name: 'Donger Project', hoursSpend: 10},
      {name: 'Simons Super Project', hoursSpend: 1}
    ];
  }
}
