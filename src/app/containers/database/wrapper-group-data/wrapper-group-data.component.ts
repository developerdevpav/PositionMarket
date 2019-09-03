import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'wrapper-group-data',
  templateUrl: './wrapper-group-data.component.html',
  styleUrls: ['./wrapper-group-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperGroupDataComponent implements OnInit, AfterContentInit {

  @Input()
  titleHeader: string;

  @Output()
  eventCreate = new EventEmitter<boolean>();
  @Output()
  eventSelectAll = new EventEmitter<boolean>();
  @Output()
  eventDeleteSelected = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

}
