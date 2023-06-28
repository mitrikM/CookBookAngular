import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchInput: string='';

  constructor(private router:Router) {
  }
  createNewRecipe() {
    this.router.navigateByUrl('/create-recipe')
  }

  redirectHome() {
    this.router.navigateByUrl('')
  }
}
