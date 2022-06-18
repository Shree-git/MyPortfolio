import { Component, OnInit } from '@angular/core';
import { AlgdsService } from '../algds.service';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {
  arr = [19,3,2,13,2,4,20,3,4,10];
  sortedArr: any[] = [];
  elapsedTime = '0';
  inputArr = '';

  constructor(private algdsService: AlgdsService) { }

  ngOnInit(): void {
  }

  mergeSort(){
    this.arr = this.inputArr.split(',').filter(item=> item.length > 0).map(x=> parseInt(x))
    this.algdsService.mergeSort(this.arr).subscribe(res =>{
      this.sortedArr = res[0];
      this.elapsedTime = res[1];
    })
  }
}
