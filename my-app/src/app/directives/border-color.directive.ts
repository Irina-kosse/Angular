import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective {
  @Input('appBorderColor') date: Date = new Date();

  color: string = '';
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.color = this.chooseColor(this.date);
    this.highlight(this.color);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }

  private chooseColor(data: Date | string) {
    const date = new Date(data);
    const currentDate = new Date();
    let days = Math.floor(
      (currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24
    );
    if (days < 14 && moment(date).isBefore(currentDate)) {
      return 'green';
    } else if (moment(date).isAfter(currentDate)) {
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
