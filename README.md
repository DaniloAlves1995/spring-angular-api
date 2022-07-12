# Application to register users

The purpose of this application is to provide a page for registering and viewing registered users, using Angular on the front-end and Java Spring Boot on the back-end.

## Architecture

The architecture consists of two isolated services that communicate via REST, one providing the front-end and the other an API as the back-end. The client application can send requests to list registered users or register new ones.

The API has an endpoint to be accessed by two HTTP methods, a POST to register users and a GET to obtain a list of registered users. Users are being saved in H2 an in-memory execution database.


## Code Organization

- Front-end: packages inside the app

| package | Description |
| --- | --- |
| users |  |
| users/components | Gets domain part and check its validation |
| users/model | Gets user name and check its validation |
| users/services | Starts the validation process after API call |
| shared | Starts the validation process after API call |
| shared/app-material | Starts the validation process after API call |
| shared/components | Starts the validation process after API call |
| shared/pipes | Starts the validation process after API call |

## Execution

1. Install used packages:

`npm install`

2. In the same folder as the file, run:


## Access in AWS

Both services are running in Docker containers on AWS and the application can be tested via the link: http://54.207.173.169:8080/users



