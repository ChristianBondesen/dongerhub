import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models/project-models/project';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {}

    getProjects(): Observable<Project[]> {
      return this.http.get<Project[]>('api/projects');
  }
}
