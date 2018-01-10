<p align="center">
    <h1 align="center">
        Angular 2
    </h1>
</p>

# Routing

We need to decide which component is going to be visible when the user is on a specific route. In order to do this, we need to:

- Configure a route for each component;
- Define options/actions to be used in order to enter a specific page (images, bottons, etc.);
- Tie a route to each option/action;

> When activating a route, the view of the component that was specified in the initial configuration will be shown.

## Routes Configuration

app.module.ts :

```ts
import { RouterModule, Routes } from '@angular/router';
```
We import RouterModule to be added to module imports and Routes for routing configuration.

```ts
const routes: Routes = [ // "routes" implements the imported type alias (similar to an interface) Routes.
  { path: 'home', component: HomeComponent }, // we attach the HomeComponent the "/home" path, for this example: http://localhost:4200/home.
  { path: '**', component: HomeComponent }, // this is called "Wild Card", when the user tries to access an undefined route, for example: http://localhost:4200/login the app will redirect him to HomeComponent. 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // when the user just types in the URL: http://localhost:4200, we need to redirect him, in this case we send him to "/home".
]
```

```ts
// As any other module from Angular, we need to import it into the RootModule
imports: [
  RouterModule.forRoot(
        routes
      )
]      
```

> An Angular best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.

## Linking actions to routes

HTML:

```html
<a [routerLink]="['/home']">Home</a>
```


Ts:

We need to import "Router" into the component and define a reference to it in the constructor:

```ts
constructor(private _routingModule: Router) { } // it can be public or protected too
```

In order to move to a specific path:

```ts
this._routingModule.navigate(['home']);
```

## Placing the views

We need to tell Angular where he should render the component view tied to the specified path.

Example (app.component.html):

```html
<router-outlet></router-outlet>
```


# Services

Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

Services are a great way to share information among classes that don't know each other.

## Singleton Design Pattern

Angular services are based on singleton design Pattern. As a result, there is only one instance of that service in the application available everywhere (everywhere  meaning in every Angular structure that has a reference to that service). Also, this design pattern allows lazy load initialization.

## Dependency Injection 

Dependency Injection Design Pattern is explained [here](https://angular.io/guide/dependency-injection-pattern).

Angular Dependency Injection implementation is explained [here](https://angular.io/guide/dependency-injection).

## Promises

Explained [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Observable 

Explained [here](http://reactivex.io/documentation/observable.html)











