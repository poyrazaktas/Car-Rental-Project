# Car Rental Project

In this project, I simulated the back-end of a Car Rental system using ASP.Net Core and the front-end using Angular. My aim was to comply with SOLID coding principles while performing this simulation and to increase project scalability using n-Layered Architecture. My motivation was to complete the C# & Angular boot camp assignments I attended [kodlama.io](https://www.kodlama.io/). 

The project I wrote has been reviewed and [approved](https://www.kodlama.io/p/gururtablosu) by the instructor or his team.

## You can read the **README** files inside the backend and frontend directory.

### [Backend](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/CarRentalProject)
### [Frontend](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend)


## How to open this project 

1. First of all, you need to open [backend solution](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/CarRentalProject/CarRental.sln).
2. Run ASP.Net Core project with IIS Express. 
   - While IIS Express is running, it can select different ports on different computers. Therefore, if the port number `localhost:44324` is different, in Angular, this change is made via  [app-settings.ts](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/car-rental-frontend/src/app/app-settings.ts).

3. Navigate to the [front-end directory](https://github.com/poyrazaktas/Car-Rental-Project/tree/master/car-rental-frontend) and run the project.
   ```
   cd car-rental-frontend
   ng serve --open
   ```

## Screenshots from the app      

![Screenshots from the app](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/Ekler/running_project.gif?raw=true)

## Entity Relation Diagram

![ER Diagram](https://github.com/poyrazaktas/Car-Rental-Project/blob/master/Ekler/ER.png?raw=true)

## Requirements

- .Net Core v3.1+
- SQL Server 13.0+
- Node.js v14.16.0+
- Angular v11.2.4+
