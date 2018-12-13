import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AffirmationListComponent } from './page/affirmation/affirmation-list.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { AppRoutingModule} from './app-routing.module';
import { AuthComponent } from './auth/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { UsersComponent } from './page/users/users.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CreateAffirmationComponent } from './page/affirmation/modal/create-affirmation/create-affirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AffirmationListComponent,
    UserProfileComponent,
    AuthComponent,
    UsersComponent,
    CreateAffirmationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
