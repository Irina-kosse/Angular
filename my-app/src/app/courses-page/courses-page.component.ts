import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces';
import { FilterPipe } from '../pipes/filter.pipe';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}
  itemsArray: Array<Course> = [];
  searchInput: string = '';
  itemToDelete: number = 0;
  searchFilter: FilterPipe = new FilterPipe();

  ngOnInit(): void {
    this.itemsArray = this.coursesService.getList();
  }

  search() {
    console.log(this.searchInput);
    this.itemsArray = this.searchFilter.transform(
      this.itemsArray,
      this.searchInput
    );
  }

  handleDelete(valueEmitted: number) {
    this.itemToDelete = valueEmitted;
    console.log(`id: ${this.itemsArray[this.itemToDelete].id}`);
  }
}
