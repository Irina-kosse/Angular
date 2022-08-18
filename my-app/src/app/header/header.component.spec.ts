import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('onLogin method', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('onLogin should be called on click', () => {
    spyOn(component, 'onLogin');
    const button = fixture.debugElement.nativeElement.querySelector('#login');
    button.click();
    expect(component.onLogin).toHaveBeenCalled();
  });

  it('onLogin should console log', () => {
    spyOn(console, 'log');
    const button = fixture.debugElement.nativeElement.querySelector('#login');
    let e = button.dispatchEvent(new Event('click'));
    component.onLogin(e);
    expect(console.log).toHaveBeenCalledWith(e);
  });
});

describe('onLogin method', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('onLogout should be called on click', () => {
    spyOn(component, 'onLogout');
    const button = fixture.debugElement.nativeElement.querySelector('#logout');
    button.click();
    expect(component.onLogout).toHaveBeenCalled();
  });

  it('onLogout should console log', () => {
    spyOn(console, 'log');
    const button = fixture.debugElement.nativeElement.querySelector('#logout');
    let e = button.dispatchEvent(new Event('click'));
    component.onLogout(e);
    expect(console.log).toHaveBeenCalledWith(e);
  });
});
