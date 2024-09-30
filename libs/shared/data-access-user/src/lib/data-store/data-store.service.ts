import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private data: any;

  constructor() {
    console.log('DataStore service created');
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
