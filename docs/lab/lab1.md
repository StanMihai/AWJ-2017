<p align="center">
    <h1 align="center">WebDev Introduction</h1>
</p>

# HTML

## Here are a few links to help you understand HTML: 

* [Basic Web Pages](https://internetingishard.com/html-and-css/basic-web-pages/)
* [Semantic HTML](https://internetingishard.com/html-and-css/semantic-html/) - the HTML markup should convey the underlying meaning of your content

> Remember [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (Document Object Model) 

> [Something a bit more interactive](https://www.codecademy.com/tracks/web)

# CSS

## Here are a few links to help you understand CSS:

* [Introduction](https://internetingishard.com/html-and-css/hello-css/)
* [Box Model](https://internetingishard.com/html-and-css/css-box-model/)
* [Selectors](https://internetingishard.com/html-and-css/css-selectors/)

# JavaScript 

> Remember to write "use strict" at the top of .js file. The "use strict" directive switches the engine to the "modern" mode, changing the behavior of some built-in features.

> Remember to add <script src="/path/to/script.js"></script> after the HTML body tag.

## Variables

* var - it can have function scope or global scope.
* let - has block scope.
* const - has block scope, value cannot change.

Example : 

```bash
var x = 0;

function a() {
    console.log(x); // 0
    x = 2;
}

for (let i=0;i<10;i++) {
    let y = 1;
}

a();
console.log(x); // 2
console.log(y); // ReferenceError: y is not defined
```

## Data Types

* number;
* string;
* boolean;
* null - unknown values;
* undefined - unassigned values;
* object - complex data structures;

> You can use the function "typeof (x)" to find the data type.

> Type conversion: "String()", "Number()", "Boolean()".

Example:

```bash
console.log(1 + 2 + "1"); // "31"
console.log("2" * "3"); // 6
console.log(null + 1); // 1
console.log(undefined + 1); // NaN (Not a Number)
```

## Objects

Example:

```bash
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,        // by key "age" store value 30
    hello: function() { // by key "hello" store a function
        console.log("works"); 
    },
    surname: ["s","a"]// by key "surname" store an Array
};

console.log(user.surname[0]); // "s"
```

## JSON

> You can transform an object into a JSON using `JSON.stringify(object)`.

Example: 

```bash
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(user)
console.log(json);
/* {
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

## Comparisons

Example:

```bash
if (1 == "1") { // non-strict equality check
    console.log("it does work");
}

if (1 === "1") { // strict equality check
    console.log("it does not work");
}

console.log(nul == undefined) //true
```

## Functions

> Remeber to use camelCase.

Example:

```bash
a(); // Does work
b(); // Does not work
c(); // Does not work

function a() { // Function Declaration
    console.log("works");
}

let b = function() { // Function Expression
    console.log("works");
}

let c = () => { // Arrow Function
    console.log("works");
}

a(); // All of them work
b();
c();
```

## DOM Manipulation

### Get Node

* document.getElementById("id");
* document.getElementsByClassName("class");
* document.querySelector("elem"); // elem can be #id , .class , HTML element

### Add Event to Node 

Example:

```bash
<!DOCTYPE HTML>
<html>
    <body>
        <div id="here">Here</div>
    </body>
    
    <script>
        let a = document.getElementById("here");

        function b() {
            console.log("works");
        }

        a.addEventListener("click", b); // first parameter reprezents the action type, the second reprezents the function to be called
    </script>
</html>
```

```bash
<!DOCTYPE HTML>
<html>
    <body>
        <div onclick="b()">Here</div>
    </body>
    
    <script>
        function b() {
            console.log("works");
        }
    </script>
</html>
```
