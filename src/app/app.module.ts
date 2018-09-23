import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

// Components
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntryComponent } from './entry/entry.component';
import { TopBarComponent } from './top-bar/top-bar.component';

// Services
import { EntryService } from './entry.service';
import { AuthService } from './auth.service';
import { SectionComponent } from './section/section.component';

// Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EntriesListComponent,
    EntryComponent,
    SectionComponent,
    TopBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'bible-journal-online-1'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    EntryService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
