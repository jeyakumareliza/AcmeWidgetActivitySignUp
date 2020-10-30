import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { InterestedPersonsListComponent } from './components/interested-persons-list/interested-persons-list.component';
import { InterestedPersonsResolverService } from './services/interested-persons-resolver.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/signup' },
  { path: 'signup', component: SignupFormComponent },
  { path: 'interested-persons-list', component: InterestedPersonsListComponent, resolve: {interestedPersons: InterestedPersonsResolverService} },
  { path: '**', component: SignupFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
