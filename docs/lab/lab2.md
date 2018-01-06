<p align="center">
    <h1 align="center">
        Angular I
    </h1>
</p>    

Angular is a framework for building client applications in HTML, CSS, and either JavaScript or TypeScript (that can be transpiled to JavaScript).
    
> `TypeScript` is a strongly-typed superset of JavaScript. It encourages a more declarative style of programming and also any valid JavaScript code is valid TypeScript code. 

# Structure of Angular Projects:
    
- e2e - includes end-to-end tests.

- node_modules - all the third-party libraries that our project is dependent upon.

- src - the actual source code of our Angular application.

> Mainly you will work in `src` folder

    - angular-cli.json - a configuration file for Angular CLI. We use this file to import third-party stylesheets or define additional environments (eg testing environment) for our application.
    - package.json - It contains metadata about our project, such as its name, version as well as the list of its dependencies.
    - assets - the foldet in which you can add files, for example images, which you will use in your project but are not a dependency or an angular file.
    - app - the angular code for the application.
    - environments - you can store local data in both .ts files, which can be accessed anywhere in your application if you import it.

# Angular Arhitecture:

##
