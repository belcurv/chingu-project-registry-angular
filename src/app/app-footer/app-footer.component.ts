import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

    desc :String = 'Chingu Project Registry';
    version :String = '1.0.0';
    link :String = 'https://github.com/ngChingu/project_registry';

  constructor() { }

  ngOnInit() {
  }

}
