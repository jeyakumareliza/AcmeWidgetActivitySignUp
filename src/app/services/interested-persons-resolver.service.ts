import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { InterestedPerson } from '../models/interested-person';
import { InterestedPersonsService } from './interested-persons.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestedPersonsResolverService implements Resolve<InterestedPerson> {

  constructor(private interestedPersonService: InterestedPersonsService) { }

  resolve(): Observable<InterestedPerson>{
    return this.interestedPersonService.get(); 
  }
}
