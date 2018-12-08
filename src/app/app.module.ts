import { SerializeHelper } from './Services/SerializeHelper';
import { AuthService } from './Services/AuthService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './UI/auth/auth.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'Shop'),
    AngularFireDatabaseModule
  ],
  providers: [AuthService, SerializeHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
