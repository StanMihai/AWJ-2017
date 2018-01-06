<p align="center">
    <h1 align="center">
        Angular I
    </h1>
</p>    

Angular is a framework for building client applications in HTML, CSS, and either JavaScript or TypeScript (that can be transpiled to JavaScript).
    
> `TypeScript` is a strongly-typed superset of JavaScript. It encourages a more declarative style of programming and also any valid JavaScript code is valid TypeScript code. 

# Structure of Angular Projects:

## First Level
    
- e2e - includes end-to-end tests.

- node_modules - all the third-party libraries that our project is dependent upon.

- src - the actual source code of our Angular application.

> Mainly you will work in `src` folder

## Second Level - src folder

- angular-cli.json - a configuration file for Angular CLI. We use this file to import third-party stylesheets or define additional environments (eg testing environment) for our application.
- package.json - It contains metadata about our project, such as its name, version as well as the list of its dependencies.
- assets - the folder in which you can add files, for example images, which you will use in your project but are not a dependency or an angular file.
- app - the angular code for the application.
- environments - you can store local data in both .ts files, which can be accessed anywhere in your application if you import it.

# Angular Arhitecture:

## Module 

Every Angular application has at least one module, RootModule.

In this file we import all the angular structures (components, pipes, services, etc.) and declare them inside the module.

```bash
@NgModule({ // decorator function used to define metadata for the module
    declarations: [
      AppComponent // here we declare which components, directives, and pipes belong to this module      
    ],
    imports: [
      BrowserModule // here we declare which other modules we use in this component       
    ],
    providers: [], // here we declare services so that any application component can use
    bootstrap: [AppComponent] // here we declare the root component/components
  })
  export class AppModule { }
```

> `BrowserModule` is imported to pull in all the features needed to run this application in a browser.

## Components

### Generate

You can generate a component using the next commmand in a terminal while beeing in the aplication folder (awj-app):
```bash
ng generate component componentName
```

### Anatomy

```bash
import { Component, OnInit } from '@angular/core'; // we import the decorator function

@Component({ // decorator function used to define metadata for the component
  selector: 'app-component-name', // the selector which we will use to instantiate the component
  templateUrl: './component-name.component.html', // location of the HTML file
  styleUrls: ['./component-name.component.css'] // location of the CSS file
})
export class ComponentNameComponent implements OnInit { // OnInit is an interface that allows you do something when the component is created

  constructor() { }

  ngOnInit() { 
  }

  // here we write the JavaScript/TypeScript code relevant to this component

} 
```

### Instantiate

You need to write the value of the component selector between "<></>" in the the template file of angular structure in which you want to have that instance.

Example:

You can write the code written below in the "app.component.html".

```bash
<app-component-name></app-component-name>
```

## Property Binding

### One Way Binding

#### Interpolation

If the value changes in the.ts file, it will also change in .html file.

component-name.component.ts : 

```bash
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "test";
}
```

component-name.component.html :

```bash
<p>{{ title }}</p> <!-- will display test -->
```

> This code is equivalent to the one written above : "<p [innerHtml]="title"></p>". The "{{}}" are a shorthand for the actual property binding syntax we have in Angular.

#### Event Binding

If there is an action in the .html file, it will produce a rezult in the .ts file.

component-name.component.ts : 

```bash
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "test";

  public test() {
      alert("works");
  }
}
```

component-name.component.html :

```bash
<p (click)="test()">{{ title }}</p> <!-- if you click on this element an alert in the browser will pop up -->
```

### Two Way Binding

When there is a change, either in .ts or .html file, the other one will be affected.

> Remember to import into your module FormsModule if you want to use `ngModel`.

component-name.component.ts : 

```bash
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "test";
  
}
```

component-name.component.html :

```bash
<input [(ngModel)]="title">
<p>{{ title }}</p> <!-- the value of "title" will appear there -->
```

