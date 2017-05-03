import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
    selector: 'app-body',
    templateUrl: './app-body.component.html',
    styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {
    
    projects = [];

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.getProjects();
    }

    getProjects() {
        this.projects = [];
        this.projectService.getAllProjects()
            .subscribe( data => {
                for (let d in data) {
                    this.projects.push(data[d]);
                }
            });
    }
}
