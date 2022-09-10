import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces';

//const courses: Course[] = [];

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  SERVER_URL: string = 'http://localhost:4200/api/courses';
  items: Array<Course> = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  getList(): Observable<Course[]> {
    return this.http.get(this.SERVER_URL) as Observable<Course[]>;
  }

  createCourse(data: {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
  }) {
    return this.http.post(`${this.SERVER_URL}`, data);
  }

  getItemByID(id: number) {
    return this.http.get(`${this.SERVER_URL}/${id}`);
  }

  updateCourse(data: {
    idI: number;
    titleI?: string;
    creationDateI?: Date;
    durationI?: number;
    descriptionI?: string;
    topRatedI?: boolean;
  }) {
    return this.http.put(`${this.SERVER_URL}/${data.idI}`, data);
  }

  deleteItem(id: number) {
    const url = `${this.SERVER_URL}/${id}`;
    console.log('Deleting has started, deleting id: ' + id);
    return this.http.delete<Course>(url, this.httpOptions);
  }
}

//const course = new CoursesService();
//course.deleteItem(0);
