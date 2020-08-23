import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {
  public filter: string = '';
  
  @Output()
  search = new EventEmitter<string>();

  public emitValue(){
    if(this.filter && this.filter.length > 3 || this.filter.length == 0)
    this.search.emit(this.filter);
  }
}
