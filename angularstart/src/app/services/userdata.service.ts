import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})


export class UserdataService {
  constructor(private http:HttpClient) {}

  userData() {
    return [
      {
        name: 'ganesh',
        email: 'ganeshchilakala11@gmail.com',
      },
      {
        name: 'sai',
        email: 'sai.gmail.com',
      },
    ];
  }

  getApiData(){
   return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
