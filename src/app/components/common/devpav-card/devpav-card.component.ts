import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExpansionSwitcher} from '../../../ui/models';
import {MatCheckboxChange} from '@angular/material';
import {TypeServiceEnum} from '../../../store/models/type-service';

@Component({
  selector: 'devpav-card',
  templateUrl: './devpav-card.component.html',
  styleUrls: ['./devpav-card.component.scss']
})
export class DevpavCardComponent implements OnInit {

  expansionEvent = false;

  @Input()
  title: string;

  @Input()
  avatar: string;

  @Input()
  id: string | TypeServiceEnum;

  @Input()
  typeAction = false;

  @Input()
  showAction = false;

  @Output()
  onExpansion: EventEmitter<ExpansionSwitcher> = new EventEmitter();

  @Output()
  onClickByAvatar: EventEmitter<string | number> = new EventEmitter();

  @Output()
  onCheck: EventEmitter<string | number> = new EventEmitter();

  @Output()
  unCheck: EventEmitter<string | number> = new EventEmitter();

  @Output()
  onClickTitle: EventEmitter<string | number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  actionOnClickByAvatar() {
    this.onClickByAvatar.emit(this.id);
  }

  actionCheckbox($event: MatCheckboxChange) {
    if ($event.checked) {
      this.onCheck.emit(this.id);
    } else {
      this.unCheck.emit(this.id);
    }
  }

  clickByTitle() {
    this.onClickTitle.emit(this.id);
  }

  expansion() {
    this.onExpansion.emit({
      id: this.id,
      value: this.expansionEvent
    });
    this.expansionEvent = !this.expansionEvent;
  }
}
