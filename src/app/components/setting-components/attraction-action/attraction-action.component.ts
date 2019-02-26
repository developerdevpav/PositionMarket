import {Component, Input, OnInit} from '@angular/core';
import {AttractionComponent} from '../entities-ui/attraction/attraction.component';
import {Store} from '@ngrx/store';
import {AttractionModel} from '../../../store/models/attraction-model';
import {Observable} from 'rxjs';
import {AttractionUI} from '../../../ui/models';

@Component({
  selector: 'app-attraction-action',
  templateUrl: './attraction-action.component.html',
  styleUrls: ['./attraction-action.component.scss']
})
export class AttractionActionComponent implements OnInit {

  @Input()
  attraction$: AttractionUI;

  constructor() {}


  ngOnInit() {
  }

}
