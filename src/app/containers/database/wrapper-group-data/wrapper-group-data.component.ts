import {AfterContentInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'wrapper-group-data',
  templateUrl: './wrapper-group-data.component.html',
  styleUrls: ['./wrapper-group-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperGroupDataComponent implements OnInit, AfterContentInit {
  @ViewChild('template') template: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.template);
  }


}
