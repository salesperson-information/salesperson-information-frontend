import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Salesperson from '../models/Salesperson';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SalespersonService {
  private baseUrl = 'http://localhost:8080/api/v1/salesperson';

  constructor(private http: HttpClient) {}

  /*
  {
  "content": [
    {
      "name": "WANG SOON YEE, LARRY",
      "registrationNumber": "P015022G",
      "registrationStartDate": "2010-12-31",
      "registrationEndDate": "2024-12-31",
      "estateAgentName": "MCDOWELL REALTY NETWORK",
      "estateAgentLicenseNumber": "L3006213G"
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 1,
    "sort": {
      "sorted": false,
      "empty": true,
      "unsorted": true
    },
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "last": false,
  "totalPages": 34012,
  "totalElements": 34012,
  "first": true,
  "size": 1,
  "number": 0,
  "sort": {
    "sorted": false,
    "empty": true,
    "unsorted": true
  },
  "numberOfElements": 1,
  "empty": false
}
  */
  getSalespeople(page: number, size: number): Observable<Salesperson[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http
      .get<any>(this.baseUrl, { params })
      .pipe(map((response) => response.content as Salesperson[]));
  }
}
