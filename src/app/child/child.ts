import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // @Input: receive data from parent
  @Input() childName: string = '';
  @Input() count: number = 0;

  // @Output: send data to parent
  @Output() countChanged = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);  // send new count to parent
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);  // send new count to parent
  }

}
