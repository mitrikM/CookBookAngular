import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.css']
})
export class SearchDropdownComponent  {
  searchTerm: string = '';
  @Input() items!:string[];
  showDropdown: boolean = false;
  filteredItems: string[]=[]
  @Output() name= new EventEmitter<string>()
  constructor() {
  }

  onSearchChange() {
    this.filteredItems = this.items.filter(item => item.includes(this.searchTerm)).slice(0,10);
    this.showDropdown = this.searchTerm.length > 0;

  }

  setName(name:string){
    this.searchTerm=(name)
    this.name.emit(name)
    this.showDropdown=false
  }

}
