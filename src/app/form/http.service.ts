import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Example } from './example'

@Injectable()
export class HttpService {
_url="https://UltimateWillingInformation.rickychhoukdean.repl.co";
  constructor(private _http:HttpClient) { }

postData(data:Example){
return this._http.post<any>(this._url,data)
}

getData(){
  return this._http.get<any>("https://UltimateWillingInformation.rickychhoukdean.repl.co")
}

}