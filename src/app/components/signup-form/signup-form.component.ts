import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivityTypes, ActivityTypeOptions } from 'src/app/models/activity-types';
import { InterestedPerson } from 'src/app/models/interested-person';
import { InterestedPersonsService } from 'src/app/services/interested-persons.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {
  interestedPerson: InterestedPerson;
  activityTypes: any;
  errorMessage: string;

  constructor(private interestedPersonsService: InterestedPersonsService, private router: Router) { }

  ngOnInit(): void {
    this.interestedPerson = new InterestedPerson();
    this.activityTypes = ActivityTypeOptions;
  }

  createEmployeeActivity() {
    this.interestedPersonsService.add(this.interestedPerson).toPromise()
    .then(() => { this.router.navigate(['interested-persons-list']); })
    .catch((err: Error) => { this.errorMessage = err.message; });
  }
}
