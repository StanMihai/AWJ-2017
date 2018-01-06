<p align="center">
    <h1 align="center">
        Project Requirements
    </h1>
</p>    

Create an aplication to be used both by teachers and students for attendance checkeing.
    
# Requirements:
    
 - You must use either Angular (Not AngularJS) or ReactJS. 
 - There are no restrictions for the backend.
 - I recommend useing Firebase ([Tutorial Firebase](docs/firebase.md)) for backend
   
## Module 1 (Mandatory) - 15 puncte

    To complete this module you do not need any kind of backend.
    
    **Set up Login Page - 3 puncte** :
     - create a component;
     - create HTML specific for this kind of page (inputs, buttons);
     - for the login you need to use username and password;
     - for the login to be succesfull, you must compare the username and password with the values stored in "Users" in environments.ts file;  
    
    **Set up Registration Page - 5 puncte** :
    - create a component;
    - create HTML specific for this kind of page (inputs, buttons);
    - for the new user you need to add: username, password, name, surname, email, id (Grupa + serie, example: 322AA) 
    - for the registration to be succesfull, you must add the new user in the value stored in "Users" in environments.ts file;
    
    **Set up Attendance page - 5 puncte** :
     - create a component;
     - the page must contain 2 columns, one for active Courses and one for active Laboratories;
     - the user can see only the Courses and the Laboratories that are underway at that moment specific for their ID;
     - in order for the attendance to be successfully committed, you must add the name of the Course/Laboratory to the property "Attendance" for the current user located in "Users" in environments.ts file;
     
    **Set up User Profile Page - 2 puncte** : 
     - create a component;
     - the user must be able to see his personal information and his current attendance;
    
## Module 2 (Optional) - 5 puncte 
    
    **Create routing - 0.5 puncte** 
    
    **Connect to Firebase - 4.5 puncte** :
     - instead of using localstorage from enviroments.ts, we can use Firebase;
     - create services (Login, Registration, Attendance, User);     
    
## Modul 3 (Bonus)
    
    **Location** :
     - The user must be in the vicinity of the Faculty of Automatic Control and Computers, University POLITEHNICA of Bucharest;
