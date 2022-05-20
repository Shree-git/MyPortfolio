import { Injectable, Pipe, PipeTransform } from '@angular/core';

export type SortType = 'asc' | 'desc';

@Injectable()
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortType: SortType | string = 'asc', sortName?: string): any {
    sortType = sortType || (sortType.toLowerCase())

    let numberArray = []
    let stringArray = []

    if(!value) return value

    if(!sortName){
      numberArray = value.filter(item => typeof item === 'number').sort()
      stringArray = value.filter(item => typeof item === 'string').sort()
    }else{
      numberArray = value.filter(item => typeof item[sortName] === 'number').sort(
        (a,b) => a[sortName] - b[sortName]
      )
      stringArray = value.filter(item => typeof item[sortName] === 'string').sort(
        (a,b) => {
          if(a[sortName] < b[sortName]) return -1
          else return 1
        }
      )
    }
    const sorted = numberArray.concat(stringArray);
    return sortType === 'asc' ? sorted : sorted.reverse();
  }

}
