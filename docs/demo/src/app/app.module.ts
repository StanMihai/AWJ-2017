import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth'
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from 'app/services/auth/auth.service';
import { ChatService } from 'app/services/chat/chat.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    ),
    FormsModule
  ],
  providers: [AuthService, AngularFireAuth, AngularFireDatabase, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
