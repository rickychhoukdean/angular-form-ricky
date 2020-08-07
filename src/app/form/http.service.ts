import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Example } from './example'

@Injectable()
export class HttpService {
_url='';
  constructor(private _http:HttpClient) { }

postData(data:Example){
return this._http.post<any>(this._url,data)
}

}