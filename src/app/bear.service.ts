import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BearService {

  constructor(private _http:HttpClient) { }

  randomBear():Observable<any>{
    return this._http.get("beers/random");
  }

  searchBear(arg:any):Observable<any>{
    if(arg.operation == 'name')
      return this._http.get("beers?beer_name="+arg.text);
    else
      return this._http.get("beers").pipe(
        map((res:any) => res.filter((item:any) => item.description.includes(arg.text)))
      );
  }
}
