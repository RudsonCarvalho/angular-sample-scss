import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './pages/about.component.html',
  styleUrls: ['./pages/about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}