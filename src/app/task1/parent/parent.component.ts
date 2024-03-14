import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() majorVersion: number = 0;
  @Input() minorVersion: number = 0;
  @Input() log: any[] = [];
}
