import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedPersonsListComponent } from './interested-persons-list.component';

describe('InterestedPersonsListComponent', () => {
  let component: InterestedPersonsListComponent;
  let fixture: ComponentFixture<InterestedPersonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedPersonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedPersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
