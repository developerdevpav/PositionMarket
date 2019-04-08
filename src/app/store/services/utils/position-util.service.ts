import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {ImageUtilService} from './image-util.service';

@Injectable({
  providedIn: 'root'
})
export class PositionUtilService {

  constructor(private store: Store<any>, imageUtil: ImageUtilService) {
  }



}
