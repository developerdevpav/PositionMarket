import {Injectable, OnInit} from '@angular/core';
import {NsiAbstractService} from './nsi.abstract.service';


@Injectable({
  providedIn: 'root'
})
export class TypeService extends NsiAbstractService implements OnInit {

  ngOnInit(): void {
    this.service = 'types';
  }

}
