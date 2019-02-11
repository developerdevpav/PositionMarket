import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {selectNsiByLanguage} from '../../../store/reducers/type.reducer';
import {Language} from '../../../store/models/language.model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-type-service',
  templateUrl: './type-service.component.html',
  styleUrls: ['./type-service.component.scss']
})
export class TypeServiceComponent implements OnInit {


  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
