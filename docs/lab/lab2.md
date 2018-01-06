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
- assets - the foldet in which you can add files, for example images, which you will use in your project but are not a dependency or an angular file.
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

You can generate a component using the next commmand in a terminal while beeing in the aplication folder (awj-app):
```bash
ng generate component componentName
```

```bash
import { Component, OnInit } from '@angular/core'; // we import the decorator function

@Component({ decorator function used to define metadata for the component
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} 
```


##
