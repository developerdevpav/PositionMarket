import {Injectable, OnInit} from '@angular/core';
import {NsiAbstractService} from './nsi.abstract.service';

@Injectable({
  providedIn: 'root'
})
export class TagService extends NsiAbstractService implements OnInit {

  ngOnInit(): void {
    this.service = 'tags';
  }

}
