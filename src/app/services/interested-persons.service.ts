import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { InterestedPerson } from '../models/interested-person';

@Injectable({
  providedIn: 'root'
})
export class InterestedPersonsService {
  private employeeActivityUrl = 'https://localhost:44340/api/InterestedPersons/';
  constructor(private http: HttpClient) { }

  get(): Observable<InterestedPerson> {
    return this.http.get<InterestedPerson>(this.employeeActivityUrl);
  }

  add(interestedPerson: InterestedPerson): Observable<InterestedPerson> {
    return this.http.post<InterestedPerson>(this.employeeActivityUrl, interestedPerson);
  }
}
