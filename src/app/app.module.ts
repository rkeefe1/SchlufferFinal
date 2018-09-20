import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutingModule } from ".//routing.module";
import { AppComponent } from "./app.component";
import { JobsComponent } from "./jobs/jobs.component";
import { FooterComponent } from "./nav/footer/footer.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JobsListComponent } from "./jobslist/jobslist.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { MessagesComponent } from "./messages/messages.component";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angular5-social-login";

import { AppService } from "./app.service";
import { CookieService } from "ngx-cookie-service";
import { SignupComponent } from "./user/signup/signup.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./user/login/login.component";
import { HeaderComponent } from "./nav/header/header.component";
import { AppMaterialModule } from "./user/app-material/app-material.module";
import { LoginLayoutComponent } from "./user/layouts/login-layout/login-layout.component";
import { ProfileLayoutComponent } from "./user/layouts/profile-layout/profile-layout.component";
import { LoginSigninHeaderComponent } from "./nav/login-signin-header/login-signin-header.component";
import { LoginSigninFooterComponent } from "./nav/login-signin-footer/login-signin-footer.component";
import { EditComponent } from "./edit/edit.component";
import { ToastrModule } from "ngx-toastr";
import { AvatarModule } from "ngx-avatar";
import { HustlerComponent } from "./hustler/hustler.component";

// import { AvatarModule } from "ng2-avatar";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    // {
    //     id: FacebookLoginProvider.PROVIDER_ID,
    //     provider: new FacebookLoginProvider("939102882940335")
    //   },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "727042451255-ck50cvd4bbjaum6187dksk6nacq3hj1r.apps.googleusercontent.com"
      )
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    HeaderComponent,
    FooterComponent,
    JobsListComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MessagesComponent,
    ProfileLayoutComponent,
    LoginLayoutComponent,
    LoginSigninHeaderComponent,
    LoginSigninFooterComponent,
    EditComponent,
    HustlerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    Ng2SearchPipeModule,
    AppMaterialModule,
    SocialLoginModule,
    ToastrModule.forRoot(),
    AvatarModule
  ],

  providers: [
    AppService,
    CookieService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
