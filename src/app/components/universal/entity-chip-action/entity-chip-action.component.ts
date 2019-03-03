import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NsiUI} from '../../../ui/models';

@Component({
  selector: 'app-entity-chip-action',
  templateUrl: './entity-chip-action.component.html',
  styleUrls: ['./entity-chip-action.component.scss']
})
export class EntityChipActionComponent implements OnInit {

  @Input() public title = '';
  @Input() public currentList$: NsiUI[] = [];
  @Input() public loadList$: Observable<NsiUI>;

  constructor() {}

  ngOnInit() {
  }

}
