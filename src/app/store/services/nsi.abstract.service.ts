import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


export abstract class NsiAbstractService {

  protected headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  protected service: string;

  constructor(protected http: HttpClient) {}

  getAll() {
    return this.http.get(`/api/${this.service}`, {headers: this.headers});
  }

  getById(uuid: string) {
    return this.http.get(`/api/${this.service}/${uuid}`, {headers: this.headers});
  }

  create(obj: any) {
    return this.http.post(`/api/${this.service}`, obj, {headers: this.headers});
  }

  public update(uuid: string, obj: any) {
    return this.http.put(`/api/${this.service}/${uuid}`, obj, {headers: this.headers});
  }

  public delete(uuid: string) {
    return this.http.delete(`/api/${this.service}/${uuid}`, {headers: this.headers});
  }

}


