# Login Page + Spring Boot Backend

A full-stack login page project built using HTML, CSS, JavaScript and Spring Boot.

## Features

### Frontend
- Responsive Login UI
- Login form validation
- Remember Me option
- Forgot Password UI
- Sign Up form
- Login/Signup switching

### Backend
- Spring Boot REST API
- Login endpoint
- Service layer
- Repository layer
- DTO for login request
- MySQL database connectivity
- JDBC-based user validation
- 
## Technologies Used

- HTML5
- CSS3
- JavaScript
- Java
- Spring Boot
- Spring REST API
- JDBC
- MySQL
- Maven
### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Java
- Spring Boot
- Spring REST API
- JDBC
- MySQL
- Maven

## Project Structure

```text
login-page/
│
├── index.html
├── style.css
├── script.js
│
└── backend/
    ├── pom.xml
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   └── resources/
    │   └── test/
    ├── mvnw
    └── mvnw.cmd

## API Endpoint

POST /api/auth/login

## Request Body

{
  "username": "Subhanshu",
  "password": "12345"
}

## Response

### Successful Login

Login Successful!

### Invalid Credentials

Invalid credentials

## Database

MySQL database is used to store user login information.

### Table

users

### Columns

- id
- username
- password

## Author
Subhanshu
