import {Component, OnInit} from '@angular/core';
import {INsiLanguage} from '../../../store/entities/present.entities';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'devpav-select',
  templateUrl: './devpav-select.component.html',
  styleUrls: ['./devpav-select.component.scss']
})
export class DevpavSelectComponent implements OnInit {

  selector: SelectionModel<INsiLanguage>;

  items: INsiLanguage[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push({id: `${i}`, value: `value chip ${i}`});
    }
    this.selector = new SelectionModel<INsiLanguage>(true, []);

    this.selector.changed.subscribe(it => {
      console.log(this.selector.selected);
    });
  }

  toggleChip(chipEntity: INsiLanguage) {
    this.selector.toggle(chipEntity);
  }

}
