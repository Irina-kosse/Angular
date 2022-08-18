import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

import { Course } from '../../interfaces';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Search method', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log');
  });

  it('load should console log', () => {
    component.load();
    expect(console.log).toHaveBeenCalled();
  });
});

describe('Search method', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component.delete, 'emit');
  });

  it('load should console log', () => {
    let i = 2;
    component.onDelete(i);
    expect(component.delete.emit).toHaveBeenCalledWith(i);
  });
});

describe('TrackBy method', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('load should console log', () => {
    let i = 1;
    const items: Array<Course> = [
      {
        id: 1,
        title: 'Title 1',
        creationDate: new Date('18/07/2021'),
        description: 'new course',
        duration: 80,
      },
      {
        id: 2,
        title: 'Title 2',
        creationDate: new Date('18/07/2021'),
        description: 'new course',
        duration: 80,
      },
    ];
    const obj = component.trackById(i, items);
    expect(obj).toBe(items[i]);
  });
});
