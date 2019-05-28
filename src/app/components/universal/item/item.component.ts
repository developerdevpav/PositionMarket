import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {


  @Input()
  public item: { id: string, title: string };

  @Output()
  public OnClickItem = new EventEmitter<string>();

  @Output()
  public OnSelectItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.item = {
      id: '1',
      title: 'Название аттракциона'
    };
  }

  onClick() {
    this.OnClickItem.emit(this.item.id);
  }

  onSelect() {
    this.OnSelectItem.emit(this.item.id);
  }

}
