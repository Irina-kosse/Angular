import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourcesPageComponent } from './cources-page/cources-page.component';
import { LogoComponent } from './logo/logo.component';
import { CourseItemComponent } from './cources-page/course-item/course-item.component';
import { DurationPipe } from './pipes/duration.pipe';
import { FormsModule } from '@angular/forms';
import { BorderColorDirective } from './directives/border-color.directive';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CourcesPageComponent,
    CourseItemComponent,
    DurationPipe,
    BorderColorDirective,
    SortByPipe,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
