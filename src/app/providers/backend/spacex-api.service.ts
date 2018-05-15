import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root"
})
export class SpacexApiService {
  private static baseUrl = "https://api.spacexdata.com/v2/";
  private _access_token: String = "";

  constructor(private restClient: HttpClient) {}

  private getOptions(options?: any): { headers: HttpHeaders, params: HttpParams, withCredentials: boolean } {
    const httpParams = new HttpParams();
    const httpHeaders = new HttpHeaders();
    if (options && options.params) {
      for (const key in options.params) {
        if (options.params.hasOwnProperty(key)) {
          httpParams.append(key, options.params[key]);
        }
      }
    }
    httpHeaders.append("Authorization", `Bearer ${this._access_token}`);
    httpHeaders.append("Content-Type", "application/json");
    if (options && options.headers) {
      for (const key in options.headers) {
        if (options.headers.hasOwnProperty(key)) {
          httpHeaders.append(key, options.headers[key]);
        }
      }
    }
    return {
      headers: httpHeaders,
      params: httpParams,
      withCredentials: !!this._access_token
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  get(route: string, options?: any): Observable<any> {
    options = this.getOptions(options);
    return this.restClient.get(`${SpacexApiService.baseUrl}${route}`, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  put(route: string, body: any, options?: any): Observable<any> {
    options = this.getOptions(options);
    return this.restClient.put(`${SpacexApiService.baseUrl}${route}`, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  post(route: string, body: any, options?: any): Observable<any> {
    options = this.getOptions(options);
    return this.restClient.post(`${SpacexApiService.baseUrl}${route}`, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(route: string, body: any, options?: any): Observable<any> {
    options = this.getOptions(options);
    return this.restClient.delete(`${SpacexApiService.baseUrl}${route}`, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  patch(route: string, body: any, options?: any): Observable<any> {
    options = this.getOptions(options);
    return this.restClient.patch(`${SpacexApiService.baseUrl}${route}`, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }
}
