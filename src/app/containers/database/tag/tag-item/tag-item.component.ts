import { Component, OnInit, Input } from '@angular/core';
import { NsiLanguage } from 'src/app/store/entities/present.entities';

@Component({
  selector: 'tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss']
})
export class TagItemComponent implements OnInit {

  @Input()
  entity: NsiLanguage;

  constructor() { }

  ngOnInit() {
  }

}
