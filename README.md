# App-Multiplica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.
This is an app developed in Angular 8 with Layer oriented architecture; its main purpose is giving a searching service.

## Installation

If you want to initialize the project, use this command (you'll create an image and container, then it run the docker container):
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

### Tests

The Git repository includes *.spec.ts files for each component and service. Tests use karma and jasmine

Initializing environment:

```sh
$ make app-init-test
```
If you want to only run tests, you have to run this command:

```sh
$ make app-run-test
```
You can go to http://0.0.0.0:9876/debug.html and check all passed tests

Also you can check the results of the code coverage report:

{direction to}/app-walmart/coverage/app-walmart/index.html

### Something went wrong?

If you want to reset the container:
```sh
$ make app-reset
```

For more information, please have a look at the Makefile

