import { Interface } from './interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http : HttpClient) { }

  getPoke(id : number) : Observable<Interface>
  {
    return this.http.get<Interface>("https://pokeapi.co/api/v2/pokemon/" + id);
  }
}
