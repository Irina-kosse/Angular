import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>) {}

  ngOnInit(): void {}

  onDelete() {
    return this.dialogRef.close(true) as unknown as Observable<boolean>;
  }

  closeModal(): Observable<boolean> {
    return this.dialogRef.close(false) as unknown as Observable<boolean>;
  }
}
