import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpParams, HttpErrorResponse, HttpClient  } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { SMSRequest } from '../model/smsrequest-model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public sendMessage(smsData: SMSRequest): Observable<any> {
    const url = 'http://localhost:8080/message/api/v1/send';
    const body = JSON.stringify(smsData);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(url, body, { headers })
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.handleError)
      );

  }

  // error handeling
  public handleError(err: HttpErrorResponse): any {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(err);
  }
}
