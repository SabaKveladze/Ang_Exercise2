import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    majorVersion = 2;
    minorVersion = 0;
  parentLog: any[] = [];
  
  majorFunction() {
    const previusVers = `${this.majorVersion}.${this.minorVersion}`
    this.minorVersion = 0;
    this.majorVersion += 1;
    const logEntry = `Major Version has Changed From ${Math.floor(parseFloat(previusVers))} to ${this.majorVersion}`;
    this.parentLog.push(logEntry)
  }



  minorFunction() {
    const previusVers = `${this.majorVersion}.${this.minorVersion}`
    this.minorVersion += 1;
    const logEntry = `Minor Version Has Changed From ${Math.round((parseFloat(previusVers) % 1) * 10)} to ${this.minorVersion}`
    this.parentLog.push(logEntry)
  }








 
}
