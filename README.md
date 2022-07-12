# Application to register users

The purpose of this application is to provide a page for registering and viewing registered users, using Angular on the front-end and Java Spring Boot on the back-end.

## Architecture

The architecture consists of two isolated services that communicate via REST, one providing the front-end and the other an API as the back-end. The client application can send requests to list registered users or register new ones.

The API has an endpoint to be accessed by two HTTP methods, a POST to register users and a GET to obtain a list of registered users. Users are being saved in H2 an in-memory execution database.


## Code Organization

- Front-end: packages inside the app packege.

| package | Description |
| --- | --- |
| users | This module has all the functions releted to user |
| users/components | The application components |
| users/model | The entities of application |
| users/services | The layer to access external API |
| shared | This module has functionalities related for all application |
| shared/app-material | Imports of APIs of material design |
| shared/components | Components that can be used for differents modules |
| shared/pipes | Generic pipes that can be used for differents modules |

- Back-end: packages inside the src/main/java/com.gsb.backend.

| package | Description |
| --- | --- |
| controller | This packege has the endpoints of API |
| model | The entities with correspondence to the database |
| repository | The Layer to access the database by interfaces |


## Execution

- Back-end
 
Make sure you have Maven installed, if you don't, see here: https://maven.apache.org/download.cgi


1. Inside the root execute maven to build:

```
nvn package
```

2. In the same folder, run:
```
java -jar target/back-end-0.0.1-SNAPSHOT.jar com.gsb.backend.BackEndApplication
```

The Tomcat server will start running the API on localhost port 8080.

- Front-end

Make sure you have Node.JS installed, if you don't, see here: https://nodejs.org/en/download/

1. Inside the root (same folder of "package.json" file) execute to download the dependences:
```
npm install
```

2. In the same folder, run:
```
npm run start
```

The application will start the execution on localhost port 4200.

## Access in AWS

Both services are running in Docker containers on AWS and the application can be tested via the link: http://54.207.173.169:8080/users



