import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Example } from './example';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class HttpService {
_url="https://UltimateWillingInformation.rickychhoukdean.repl.co";
  constructor(private _http:HttpClient) { }

postData (data:Example){
return this._http.post<any>(this._url,data).pipe(catchError(this.errorHandler))
}
errorHandler(error:HttpErrorResponse){
  return throwError(error);
}

}