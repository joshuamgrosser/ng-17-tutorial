import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    NgIf,
    NgOptimizedImage,
    NavigationComponent,
    NavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent { }
