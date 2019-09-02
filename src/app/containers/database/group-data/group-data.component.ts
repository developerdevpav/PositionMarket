import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MatListOption} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface ItemSelectIcon {
  showIcon: boolean;
  title: string;
}

export interface ItemSelect {
  id: string | number;
  value: string;
}

@Component({
  selector: 'group-data',
  templateUrl: './group-data.component.html',
  styleUrls: ['./group-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupDataComponent implements OnInit, AfterContentInit, OnChanges {

  @ViewChild('shoes') template: ElementRef<HTMLElement>;

  @Input()
  icon: ItemSelectIcon;

  @Input()
  items: ItemSelect[] = [];

  @Output()
  selected: EventEmitter<string[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  eventSelectItems($event: SelectionModel<MatListOption>) {
    const selectIds: string[] = $event.selected.map(matOption => matOption.value);
    this.selected.emit(selectIds);
  }

  getClassTitle(): string {
    return this.icon.showIcon ? '' : 'title-icon';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
