<p align="center">
    <h1 align="center">
        Project Requirements
    </h1>
</p>    

Create an application to be used both by teachers and students for attendance checking.
    
# Requirements:
    
 - You must use either Angular (Not AngularJS) or ReactJS;
 - There are no restrictions for the backend;
 - I recommend useing Firebase ([Tutorial Firebase](docs/firebase.md)) for backend.
   
## Module 1 (Mandatory) - 15 points

To complete this module you do not need any kind of backend.
    
**Set up Login Page - 3 points** :
- create a component;
- create HTML specific for this kind of page (inputs, buttons);
- for the login you need to use a username and a password;
- for the login to be succesfull, you must compare the username and password with the values stored in "Users" in the environments.ts file.
    
**Set up Registration Page - 5 points** :
- create a component;
- create HTML specific for this kind of page (inputs, buttons);
- for a new user you need to add: username, password, name, surname, e-mail, id (Grupa + serie, example: 322AA); 
- for the registration to be succesfull, you must add the new user in "Users" in environments.ts file.
    
**Set up Attendance page - 5 points** :
- create a component;
- the page must contain 2 columns, one for active Courses and one for active Laboratories;
- the user can only see the Courses and the Laboratories that are underway at that moment specific for their ID;
- in order for the attendance to be successfully committed, you must add the name of the Course/Laboratory to the property "Attendance" for the current user, located in "Users" in environments.ts file.
     
**Set up User Profile Page - 2 points** : 
- create a component;
- the user must be able to see his personal information and his current attendance.

### Environments

When the application is used for the first time "users" array is empty. 

environment.ts : 

```bash
export let environment = {
  production: false,
  users: [
            {
                "username": "test",
                "password": "test",
                "name": "Mihai",
                "surname": "Stan",
                "email": "stan.mihaioctavian@gmail.com",
                "id": "322AA",
                "attendance" : ["112"]
            },
            {
                "username": "test1",
                "password": "test1",
                "name": "Ion",
                "surname": "Vasile",
                "email": "ion.vasile@gmail.com",
                "id": "322AB",
                "attendance" : []
            }  
  ],
  laboratories: [
                    {
                        "name": "AWJ",
                        "dates": [
                                    {
                                        "day": "Monday",
                                        "hour": 1300
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 0800
                                    }
                        ],
                        "groups": ["322AB", "322AC"],
                        "id": "111"
                    }, 
                    {
                        "name": "BD",
                        "dates": [
                                    {
                                        "day": "Monday",
                                        "hour": 1100
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 1000
                                    }
                        ],
                        "groups": ["322AA"],
                        "id": "112"
                    }
  ],
  courses: [
                    {
                        "name": "AWJ",
                        "dates": [
                                    {
                                        "day": "Monday",
                                        "hour": 1300
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 0800
                                    }
                        ],
                        "groups": ["322AB", "322AC"],
                        "id": "113"
                    }, 
                    {
                        "name": "BD",
                        "dates": [
                                    {
                                        "day": "Monday",
                                        "hour": 1100
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 1000
                                    }
                        ],
                        "groups": ["322AA"],
                        "id": "114"
                    }
  ] 
};
```
    
## Module 2 (Optional) - 5 points 
    
**Create routing - 0.5 points** 
    
**Connect to Firebase - 4.5 points** :
- instead of using localstorage from enviroments.ts, we can use Firebase;
- create services (Login, Registration, Attendance, User).   
    
## Module 3 (Bonus)
    
**Location** :
- The user must be in the vicinity of the The Faculty of Automatic Control and Computer Science, University POLITEHNICA of Bucharest.
