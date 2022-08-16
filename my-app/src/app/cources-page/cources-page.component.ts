import { Component, OnInit, NgModule, Output } from '@angular/core';
import { Course } from '../interfaces';
@Component({
  selector: 'app-cources-page',
  templateUrl: './cources-page.component.html',
  styleUrls: ['./cources-page.component.scss'],
})
export class CourcesPageComponent implements OnInit {
  constructor() {}
  itemsArray: Array<Course> = [];
  searchInput: string = '';
  itemTodelete: string = '';

  ngOnInit(): void {
    this.itemsArray = [
      {
        id: 0,
        title: 'Databases for Node.JS Developers',
        creationDate: new Date('01/08/2021'),
        duration: 214,
        description: `Node.js developers often consider MongoDB to be 
        their main choice when building a data-driven application—but 
        many alternatives may provide better solutions. In this course, 
        learn about the various database options available for Node.js 
        applications, so that you can select the right database for your 
        app. Daniel Khan reviews the basics of relational and nonrelational 
        databases, and explains how—and when—to use document databases with 
        Node.js. He also covers using key-value stores and relational databases 
        with Node.js, demonstrating how to work with MySQL and Sequelize.`,
      },
      {
        id: 1,
        title: 'Advanced Express',
        creationDate: new Date('02/19/2019'),
        duration: 181,
        description: `Node.js is one of major platforms for the web and Express 
        is one of the most popular Node frameworks. This course is designed to 
        take your development skills to the next level, with advanced techniques 
        that will enable you to tackle more complex projects with Express. Learn 
        how to integrate a database, build a proper user authentication and 
        authorization system, securely upload files, process and serve images, 
        and deploy your Express apps to production. Daniel also provides instructions 
        for building a login form, improving performance with a cluster module, and 
        securing your application. A complete startup project is included in the exercise 
        files, so you can follow along with the lessons and have a solid foundation for 
        future Express projects.`,
      },
      {
        id: 1,
        title: 'Angular Essential Training',
        creationDate: new Date('01/07/2019'),
        duration: 210,
        description: `Angular was designed by Google to address challenges programmers 
        face building complex, single-page applications. This JavaScript platform 
        provides a solid core of web functionality, letting you take care of the design 
        and implementation details. In this course, Justin Schwartzenberger introduces 
        you to the essentials of this "superheroic" platform, including powerful features 
        such as two-way data binding, comprehensive routing, and dependency injection. 
        Justin steps through the platform one feature at a time, focusing on the 
        component-based architecture of Angular. Learn what Angular is and what it can do, 
        as Justin builds a full-featured web app from start to finish. After mastering 
        the essentials, you can tackle the other project-based courses in our library and 
        create your own Angular app.`,
      },
    ];
  }

  search() {
    console.log(this.searchInput);
  }

  deleteItem(event: any) {}

  handleDelete(valueEmitted: string) {
    this.itemTodelete = valueEmitted;
    console.log(this.itemTodelete);
  }
}
