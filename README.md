# App-Multiplica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

This app was developed in Angular 8 following the LIFT pattern recomended by Google on the angular styleguide.

L: Locate code quickly
I: Identify the code at a glance
F: keep the Flattest structure you can
T: Try to be DRY

You can find the deployed app on heroku: https://app-multiplica.herokuapp.com/ 

if you want to access to the admin zone (when you can add, update and delete colors) please use the following credentials:

```sh
username = admin
password = 123456
```

## Installation on a local environment

If you want to initialize the project, use this command (you'll create an image and container, then, it run the docker container):

```sh
$ make app-init
```

If you only want to run the container, use this one:
```sh
$ make app-start
```

If you only want to stop the container, use this one:
```sh
$ make app-stop
```
### Something went wrong?

If you want to reset the container:
```sh
$ make app-reset
```

For more information, please have a look at the Makefile

