# Car Rental Project - Frontend

***You can read this file in [Turkish](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/car-rental-frontend/README.tr-TR.md)***

This project was created with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Introduction

In this project, I created the user interface of the car rental simulation that I developed its back-end with Asp.net Core version 3.1. While creating this interface, I benefited from various features of [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) and Angular framework. The features I benefited from and the application tree are as follows: 

1. All backend requests under the [services](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/services) directory
2. The model classes for each response at the [models](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/models) directory
3. [Components](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/components) directory
4. Data filters and transformations of some components are under the [pipes](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/pipes) directory
5.  [Guards](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/guards) directory
6. [Interceptors](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend/src/app/interceptors) directory

## How to run this project

1. If the backend works on a different port as I was said at [README](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/README.md#proje-%C3%A7al%C4%B1%C5%9Ft%C4%B1rma-ad%C4%B1mlar%C4%B1) you need to ensure that you changed API endpoints in this [file](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/car-rental-frontend/src/app/app-settings.ts)
2. And run the following commands:
```shell
npm install
ng serve --open 
```
