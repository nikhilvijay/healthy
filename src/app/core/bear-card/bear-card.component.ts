import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-bear-card',
  templateUrl: './bear-card.component.html',
  styleUrls: ['./bear-card.component.css']
})
export class BearCardComponent {

  @Input('bearData') bearData:any;
  @Input('enableButton') enableButton:any;
  @Output() another = new EventEmitter<any>();
  @Output() nonAlcoholic = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  anotherHandler(){
    this.another.emit();
  }

  nonAlcoholicHandler(){
    this.nonAlcoholic.emit();
  }

}
