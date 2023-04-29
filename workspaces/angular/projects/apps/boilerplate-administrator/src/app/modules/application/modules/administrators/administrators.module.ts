import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorsRoutingModule } from './administrators-routing.module';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@bruno-bombonate/ngx-forms';

// containers
import { AdministratorsComponent } from './administrators.component';
import { AdministratorsListComponent } from './containers/administrators-list/administrators-list.component';
import { AdministratorsAddComponent } from './containers/administrators-add/administrators-add.component';
import { AdministratorsDetailsComponent } from './containers/administrators-details/administrators-details.component';

// components
import { AdministratorSearchFormComponent } from './components/administrator-search-form/administrator-search-form.component';
import { AdministratorListComponent } from './components/administrator-list/administrator-list.component';
import { AdministratorFormComponent } from './components/administrator-form/administrator-form.component';

// pipes
import { StatusPipe } from 'utils/pipes/status/status.pipe';

@NgModule({
  declarations: [
    // containers
    AdministratorsComponent,
    AdministratorsListComponent,
    AdministratorsAddComponent,
    AdministratorsDetailsComponent,
    // components
    AdministratorListComponent,
    AdministratorSearchFormComponent,
    AdministratorFormComponent
  ],
  imports: [
    CommonModule,
    AdministratorsRoutingModule,
    // modules
    ReactiveFormsModule,
    FormsModule,
    // pipes
    StatusPipe
  ]
})
export class AdministratorsModule { }
