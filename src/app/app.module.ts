import { MatButtonModule } from '@angular/material/button';
import { ProductModule } from './UI/product/product.module';
import { AuthService } from './Services/AuthService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './UI/auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ProductService } from './Services/ProductService';
import { NavComponent } from './UI/nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ProductModule,
    AngularFireModule.initializeApp(environment.firebase, 'Shop'),
    AngularFireDatabaseModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
