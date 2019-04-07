import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageModel} from '../models/image.model';
import {ImageService} from './image/image.service';

@Injectable({
  providedIn: 'root'
})
export class ApiImageService {

  protected headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});

  private utl = '/api';

  constructor(private http: HttpClient, private imageService: ImageService) {
  }

  private upload(data: FormData): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', `${this.utl}/images/multiple/upload`, data, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadImages(fileList: FileList): Observable<HttpEvent<any>> {
    const formData: FormData = this.imageService.getFormData(fileList);
    return this.upload(formData);
  }
}
