import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sb-heading',
  templateUrl: './sb-heading.component.html',
  styleUrls: ['./sb-heading.component.scss']
})
export class SbHeadingComponent implements OnInit {

  constructor() { }

  @Input() title = '';
  @Input() subtitle = '';

  ngOnInit(): void {
  }

}
