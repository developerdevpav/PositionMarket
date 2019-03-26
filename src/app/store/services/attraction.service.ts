import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AttractionModel} from '../models/attraction-model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {

  protected headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  utl = environment.config.url;

  constructor(protected http: HttpClient) {
  }

  getAll(service: string) {
    return this.http.get(`${this.utl}/${service}`, {headers: this.headers});
  }

  getById(service: string, uuid: string) {
    return this.http.get(`${this.utl}/${service}/${uuid}`, {headers: this.headers});
  }

  create(service: string, obj: AttractionModel) {
    return this.http.post(`${this.utl}/${service}`, obj, {headers: this.headers});
  }

  public update(service: string, obj: AttractionModel) {
    return this.http.put(`${this.utl}/${service}`, obj, {headers: this.headers});
  }

  public delete(service: string, uuid: string) {
    return this.http.delete(`${this.utl}/${service}/${uuid}`, {headers: this.headers});
  }

}
