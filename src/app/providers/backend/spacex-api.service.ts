import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CompanyInfo } from "../../models/CompanyInfo";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Launch } from "../../models/Launch";

@Injectable({
  providedIn: "root"
})
export class SpacexApiService {
  baseUrl = "https://api.spacexdata.com/v2/";

  constructor(private restClient: HttpClient) {}

  getCompanyInfo(): Observable<CompanyInfo> {
    return this.restClient
      .get<CompanyInfo>(`${this.baseUrl}info`)
      .pipe(catchError(this.handleError));
  }

  getLatestLaunch() {
    return this.restClient
      .get<Launch>(`${this.baseUrl}launches/latest`)
      .pipe(catchError(this.handleError));
  }

  getPastLaunches() {
    return this.restClient
      .get<Launch[]>(`${this.baseUrl}launches`)
      .pipe(catchError(this.handleError));
  }

  getUpcomingLaunches() {
    return this.restClient
      .get<Launch[]>(`${this.baseUrl}launches/upcoming`)
      .pipe(catchError(this.handleError));
  }

  getAllLaunches() {
    return this.restClient
      .get<Launch[]>(`${this.baseUrl}launches/all`)
      .pipe(catchError(this.handleError));
  }

  getFilteredLaunches() {
    const filters = {
      core_reuse: true,
      order: "asc"
    };
    let parsedFilters = "";
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        if (parsedFilters.length !== 0) {
          parsedFilters = parsedFilters + "&";
        }
        parsedFilters = parsedFilters + key + "=" + filters[key];
      }
    }
    console.log(parsedFilters);
    return this.restClient
      .get<Launch[]>(`${this.baseUrl}launches?${parsedFilters}`)
      .pipe(catchError(this.handleError));
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
}
