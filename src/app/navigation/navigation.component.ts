import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title: string = "Movie Finder";
  @ViewChild('f', { static: false }) searchForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    const query = this.searchForm.value.search;
    
    this.router.navigate(['/movie/search'], { queryParams: { search: query } })
  }

}
