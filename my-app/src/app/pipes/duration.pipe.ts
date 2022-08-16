import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hh = Math.floor(minutes / 60);
    const mm = minutes - hh * 60;
    return `${hh}h${mm}m`;
  }
}
