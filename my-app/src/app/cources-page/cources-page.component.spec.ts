import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcesPageComponent } from './cources-page.component';

describe('CourcesPageComponent', () => {
  let component: CourcesPageComponent;
  let fixture: ComponentFixture<CourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourcesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Search method', () => {
  let component: CourcesPageComponent;
  let fixture: ComponentFixture<CourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourcesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log');
  });

  it('should console log', () => {
    component.search();
    expect(console.log).toHaveBeenCalled();
  });
});

describe('Search method', () => {
  let component: CourcesPageComponent;
  let fixture: ComponentFixture<CourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourcesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log');
  });

  it('should console log', () => {
    component.handleDelete(component.itemTodelete);
    expect(console.log).toHaveBeenCalled();
  });
});
