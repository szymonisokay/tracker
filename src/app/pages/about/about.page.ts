import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
})
export class AboutPage implements OnInit {
  authors = [
    'Szymon Wałach',
    'Dawid Jurczak',
    'Aleksander Goli',
    'Szymon Piotrowski',
    'Krzysztof Piwowar',
  ];

  constructor() {}

  ngOnInit() {}
}
