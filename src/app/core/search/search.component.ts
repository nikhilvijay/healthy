import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() search = new EventEmitter<any>();

  text = "";
  radio = "name";

  searchHandler(){
    this.search.emit({"text":this.text, "operation": this.radio})
  }

}
