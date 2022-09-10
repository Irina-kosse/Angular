import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { LogoComponent } from './logo/logo.component';
import { CourseItemComponent } from './courses-page/course-item/course-item.component';
import { DurationPipe } from './pipes/duration.pipe';
import { FormsModule } from '@angular/forms';
import { BorderColorDirective } from './directives/border-color.directive';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationComponent } from './courses-page/course-item/confirmation/confirmation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from '../app/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesPageComponent,
    CourseItemComponent,
    DurationPipe,
    BorderColorDirective,
    SortByPipe,
    FilterPipe,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
