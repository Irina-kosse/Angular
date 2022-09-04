import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../interfaces';
import { TrackByFunction } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { result } from 'lodash';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() items: Course[] = [];
  @Input() confirmed: boolean = false;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  constructor(public matDialog: MatDialog) {}

  load(): void {
    console.log('Load more');
  }

  openModal() {}
  onDelete(i: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '250px';
    dialogConfig.width = '400px';
    dialogConfig.data = {
      confirmed: false,
    };
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(
      ConfirmationComponent,
      dialogConfig
    );
    modalDialog.afterClosed().subscribe((result) => {
      console.log('Dialog was closed ' + result);
      if (result) {
        this.delete.emit(i);
      }
    });
  }

  ngOnInit(): void {}

  trackById: TrackByFunction<Course[]> = (index: number, item: Course[]) =>
    item[index];
}
