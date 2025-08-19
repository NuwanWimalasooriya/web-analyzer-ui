import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule
import { ContentService } from './services/content.service';
import { Content } from './models/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputUrl = '';
  content: Content | null = null;
  error: string  = "";
   loading: boolean = false;

  constructor(private contentService: ContentService) {}

  fetchContent() {
    if (!this.inputUrl.trim()) return;
 this.loading = true; 
    this.contentService.getContentFromUrl(this.inputUrl).subscribe({
    next: (res: Content) => {
        console.log('Response:', res);
        this.content = res;
         this.loading = false;
      },
      error: () => this.error = 'Error fetching content'
    });
  }

  fetchUrl() {
  if (!this.inputUrl.trim()) return;

  console.log('Requesting URL:', this.inputUrl);
 this.loading = true;
   this.content=null;
    this.error="";
  this.contentService.fetchUrl(this.inputUrl).subscribe({
   next: (res: Content) => {
        console.log('Response:', res);
        this.content = res;
         this.loading = false;
        
      },
    error: (res: Content) => {
      console.error('Error fetching content:', res); 
      this.error = 'Error fetching content'
       this.loading = false;
     
    }
  });
}


getHeadingsByLevel(): { [level: string]: string[] } {
  if (!this.content || !this.content.headings) return {};

  return this.content.headings.reduce((acc: any, h) => {
    if (!acc[h.level]) {
      acc[h.level] = [];
    }
    acc[h.level].push(h.text);
    return acc;
  }, {});
}
}


