import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onLogin(e: Event): void {
    console.log(e);
  }

  onLogout(e: Event): void {
    console.log(e);
  }
}
