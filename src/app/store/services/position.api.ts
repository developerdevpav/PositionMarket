import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PositionEntity} from '../entities/position.entity';

@Injectable({
  providedIn: 'root'
})
export class PositionApi {

  protected headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  utl = '/api';

  constructor(protected http: HttpClient) {
  }

  getAll(service: string): Observable<any> {
    return this.http.get(`${this.utl}/${service}`, {headers: this.headers});
  }

  getById(service: string, uuid: string) {
    return this.http.get(`${this.utl}/${service}/${uuid}`, {headers: this.headers});
  }

  create(service: string, obj: PositionEntity) {
    return this.http.post(`${this.utl}/${service}`, obj, {headers: this.headers});
  }

  public update(service: string, obj: PositionEntity) {
    return this.http.put(`${this.utl}/${service}`, obj, {headers: this.headers});
  }

  public delete(service: string, uuid: string) {
    return this.http.delete(`${this.utl}/${service}/${uuid}`, {headers: this.headers});
  }

  public deleteArray(service: string, uuids: string[]) {
    return this.http.delete(encodeURI(`${this.utl}/${service}/[${uuids}]`), { headers: this.headers });
  }

}
