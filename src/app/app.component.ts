import { Component, OnInit } from '@angular/core';
import { BearService } from './bear.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  randomBear = {};
  searchBear = {};
  
  constructor(private bear:BearService){
  }

  ngOnInit(){
    this.getRandom();
  }

  getRandom(){
    this.bear.randomBear().subscribe(res=>this.randomBear=res);
  }

  getResult(arg:any){
    this.bear.searchBear(arg).subscribe(res=>this.searchBear=res);
  }
}
