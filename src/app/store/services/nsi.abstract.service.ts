import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NsiAbstractService<T> {

  protected headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  utl = '/api';


  constructor(protected http: HttpClient) {}

  getAll(service: string) {
    return this.http.get(`${this.utl}/${service}`, {headers: this.headers});
  }

  getById(service: string, uuid: string) {
    return this.http.get(`${this.utl}/${service}/${uuid}`, {headers: this.headers});
  }

  create(service: string, obj: T) {
    return this.http.post(`${this.utl}/${service}`, obj, {headers: this.headers});
  }

  public update(service: string, obj: T) {
    return this.http.put(`${this.utl}/${service}`, obj, {headers: this.headers});
  }

  public delete(service: string, uuid: string) {
    return this.http.delete(`${this.utl}/${service}/${uuid}`, {headers: this.headers});
  }

  public deleteAll(service: string, uuids: string[]) {
    const url = encodeURI(`${this.utl}/${service}/[${uuids}]`);
    return this.http.delete(url, {headers: this.headers});
  }

}


