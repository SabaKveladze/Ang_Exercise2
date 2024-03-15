import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {

  constructor() { }
  @Input() IsButtonDisabled: boolean = false;
  @Output() agreeCountChange = new EventEmitter<number>();
  @Output() disagreeCountChange = new EventEmitter<number>();
  @Input() h3!: string;
  ngOnInit(): void {
  }


  agreeClick() {
    this.IsButtonDisabled = true;
    this.agreeCountChange.emit(1);
  }
  disagreeClick() {
    this.IsButtonDisabled = true;
    this.disagreeCountChange.emit(1);
  }
}
