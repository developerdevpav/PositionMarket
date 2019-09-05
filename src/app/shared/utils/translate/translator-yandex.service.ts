import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslatorYandexService {

  private key = 'trnsl.1.1.20190520T091322Z.1e36defcb91f9b80.ef44afee8a6b233f54f2604a05833f8fa1f7614b';
  private url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  private readonly headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-type', 'application/x-www-form-urlencoded');
  }

  public translate = (target: string, text: string) => {
    const data = `key=${this.key}&text=${text}&lang=${target}`;
    return this.http.post(this.url, data, {headers: this.headers});
  }

}
