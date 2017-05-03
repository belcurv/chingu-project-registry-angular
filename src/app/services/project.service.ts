import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

    constructor(private http: Http) { }
    
    getAllProjects = () => {
        let apiEndpoint: string = 'https://chingu-project-registry.herokuapp.com/api/projects';

        return this.http
            .get(apiEndpoint)
            .map(response => response.json());
    }

}
