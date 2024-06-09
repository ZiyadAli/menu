import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() data: any;
  @Input() student: Student = { id: 1, name: "Ziyad", age: 3 }
  @Output() MyEvent = new EventEmitter();


  senddata() {
    this.MyEvent.emit(this.send);
  }

  send: any;

}
