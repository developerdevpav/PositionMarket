import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'subparagraph',
  templateUrl: './subparagraph.component.html',
  styleUrls: ['./subparagraph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubparagraphComponent implements OnInit {

  @Input()
  toc: string;

  constructor() { }

  ngOnInit() {
  }

}
