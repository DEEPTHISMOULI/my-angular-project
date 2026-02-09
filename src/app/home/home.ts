import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Child } from '../child/child';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, Child],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'my-first-app';
  name = 'Deepthi';
  count = 0;
  age = 24;
  username = 'Deepthi123';
  isDisabled = true;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  isLoggedIn = false;

  isActive = true;
  isError = false;
  textSize = 20;
  textColor = 'blue';

  today = new Date();
  price = 1234.5;
  message = 'Hello Angular Pipes';
  user = { name: 'Deepthi', age: 24, city: 'Birmingham' };

  parentCount = 10;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  save() {
    console.log('Name:', this.name);
    console.log('Count:', this.count);
    console.log('Age:', this.age);
    console.log('Username:', this.username);
    alert('Data saved!');
  }

  onCountChanged(newCount: number) {
    this.parentCount = newCount;
    console.log('Parent received new count:', newCount);
  }
}