import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../interfaces';
import { TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() items: Course[] = [];
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  load(): void {
    console.log('Load more');
  }

  onDelete(): void {
    this.delete.emit('From child');
    console.log();
  }

  ngOnInit(): void {}

  trackById: TrackByFunction<Course[]> = (index: number, item: Course[]) =>
    item[index];
}
