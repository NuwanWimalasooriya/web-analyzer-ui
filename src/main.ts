import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import 'bootstrap/dist/css/bootstrap.min.css';

bootstrapApplication(AppComponent, {
  providers: [
     importProvidersFrom(HttpClientModule, FormsModule)// ✅ provide HttpClientModule here
  ]
}).catch(err => console.error(err));