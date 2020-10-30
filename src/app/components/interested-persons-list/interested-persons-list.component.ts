import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestedPerson } from 'src/app/models/interested-person';
import { ActivityTypes } from 'src/app/models/activity-types';

@Component({
  selector: 'app-interested-persons-list',
  templateUrl: './interested-persons-list.component.html',
  styleUrls: ['./interested-persons-list.component.scss']
})
export class InterestedPersonsListComponent implements OnInit {
  interestedPersons: Array<InterestedPerson>;
  activityTypes: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.interestedPersons = this.route.snapshot.data.interestedPersons;
     this.activityTypes = Object.values(ActivityTypes);
  }

}
