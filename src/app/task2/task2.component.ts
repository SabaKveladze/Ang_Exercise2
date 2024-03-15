import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
  @Input() h3: string = "";
  constructor() { }
  
  ngOnInit(): void {
  }
  // isButtonDisabled: boolean = false;
  agreeCount = 0
  disagreeCount = 0

  updateAgreeCount(count: number) {
    this.agreeCount += count;
  }
  updateDisagreeCount(count: number) {
    this.disagreeCount += count;
  }
}
