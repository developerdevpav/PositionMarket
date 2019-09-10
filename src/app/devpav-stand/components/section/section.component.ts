import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'section-topic',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input()
  toc: string;

  constructor() { }

  ngOnInit() {
  }

}
