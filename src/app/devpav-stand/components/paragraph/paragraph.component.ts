import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @Input()
  toc: string;

  constructor() { }

  ngOnInit() {
  }

}
