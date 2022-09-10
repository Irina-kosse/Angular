import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  itemsArray: Course[] = [];
  searchInput: string = '';
  itemToDelete: number = 0;
  searchFilter: FilterPipe = new FilterPipe();

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.coursesService.getList().subscribe((data) => {
      console.log(data);
      this.itemsArray = data;
    });
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
    console.log(valueEmitted);
    //console.log(`id: ${this.itemsArray[this.itemToDelete].id}`);
    console.log('Check for existence');
    this.coursesService
      .getItemByID(valueEmitted)
      .subscribe((data) => console.log(data));
    this.coursesService.deleteItem(valueEmitted).subscribe((res) => {
      console.log('course was deleted ' + res);
    });

    //this.itemsArray = this.coursesService.getList();
  }
}
