import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Course } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const courses: Course[] = [
      {
        id: 0,
        title: 'Databases for Node.JS Developers',
        creationDate: new Date('09/08/2022'),
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
        topRated: false,
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
        topRated: true,
      },
      {
        id: 2,
        title: 'Angular Essential Training',
        creationDate: new Date('08/24/2022'),
        duration: 221,
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
        topRated: false,
      },
      {
        id: 4,
        title: 'Designing RESTful APIs',
        creationDate: new Date('09/12/2022'),
        duration: 80,
        description: `Having a solid understanding of how to correctly build APIs is 
        important for any developer planning on creating websites. In this course, learn 
        how to plan and model your own APIs, and explore the six REST design constraints 
        that help guide your architecture. Keith Casey starts with a simple overview, 
        including advice on identifying the users or "participants" of your system, and 
        the activities they might perform with it. He discusses how to validate your design 
        before you build it, and explores the HTTP concepts and REST constraints needed to build 
        your API. To wrap up, Keith goes over some of the most common API design patterns you may
         encounter.`,
        topRated: false,
      },
      {
        id: 5,
        title: 'GraphQL Essential Training',
        creationDate: new Date('11/04/2020'),
        duration: 116,
        description: `GraphQL—a query language for APIs that was originally built by Facebook—makes 
        it easier for you to get the data you actually need from a query. In this course, learn how 
        to get started with GraphQL. Instructor Emmanuel Henri walks through how to set up GraphQL, 
        explores the GraphQL schema, and goes over the basic types and fields. He also shows how to 
        set up persistence—including how to use SQL and MongoDB with GraphQL; covers how to add new 
        items with mutations; and shares how to leverage some advanced features in your queries.`,
        topRated: true,
      },
      {
        id: 6,
        title: 'Building a Website with Node.js and Express.js',
        creationDate: new Date('1/10/2020'),
        duration: 190,
        description: `Node.js is a major platform for the web, used by companies like Uber, Netflix, 
        and Intuit. Express.js is a fast, minimalist framework that sits on top of Node.js and allows 
        you to build powerful single- and multi-page web applications and websites. In this course, 
        instructor Daniel Khan shows how to build a realistic and robust website with these technologies. 
        Learn how to build a basic application in minutes, transform HTML into dynamic pages, leverage 
        template engines to modularize code, add routing and business logic, handle errors, store form data, 
        and create API endpoints for single-page applications. Along the way, Daniel helps you pick up bits 
        and pieces about Express.js and improve your overall knowledge of how to work effectively with Node.js.`,
        topRated: false,
      },
    ];
    return { courses };
  }
}
