import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlgdsService {
  API_URL = "http://localhost:5000"

  constructor(private http: HttpClient) {

  }

  mergeSort(arr){
    return this.http.post(`${this.API_URL}/mergesort`, arr);
  }
}
