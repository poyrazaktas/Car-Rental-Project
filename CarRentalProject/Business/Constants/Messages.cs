using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Business.Constants
{
    public static class Messages
    {
        public static string CarAdded = "The car has been successfully added.";
        public static string CarUpdated = "The car has been successfully updated.";
        public static string CarDeleted = "The car was successfully deleted.";
        public static string CarsListed = "Cars listed successfully.";

        public static string ErrorAddCar = "The car could not be added.";
        public static string ErrorUpdateCar = "The car could not be updated.";
        public static string ErrorDeleteCar = "The car could not be deleted.";
        public static string ErrorListCars = "The cars could not be listed.";

        public static string BrandAdded = "The brand has been successfully added.";
        public static string BrandUpdated = "The brand has been successfully updated.";
        public static string BrandDeleted = "The brand has been successfully deleted.";
        public static string BrandsListed = "Brands listed successfully.";

        public static string ColorAdded = "Color successfully added.";
        public static string ColorUpdated = "Color successfully updated.";
        public static string ColorDeleted = "The color has been successfully removed.";
        public static string ColorsListed = "Colors listed successfully.";

        public static string UserAdded = "The user has been successfully added.";
        public static string UserUpdated = "The user has been successfully updated.";
        public static string UserDeleted = "The user has been successfully deleted.";
        public static string UsersListed = "Users are listed successfully.";

        public static string CustomerAdded = "The client has been successfully added.";
        public static string CustomerUpdated = "The client has been successfully updated.";
        public static string CustomerDeleted = "The client has been successfully deleted.";
        public static string CustomersListed = "Customers listed successfully.";

        public static string RentalAdded = "The lease has been successfully added.";
        public static string RentalUpdated = "The lease has been successfully updated.";
        public static string RentalDeleted = "The lease has been successfully deleted.";
        public static string RentalsListed = "Leases are listed successfully.";

        public static string ErrorAddRental = "Could not add lease.";
        public static string ErrorUpdateRental = "The lease could not be updated.";
        public static string ErrorDeleteRental = "The lease could not be deleted.";
        public static string ErrorListRentals = "The rental could not be listed.";

        public static string ErrorBrandExists = "There is the same brand in the system.";
        public static string ErrorColorExists = "The system has the same color.";

        public static string CarImageAdded = "The car photo has been successfully added.";
        public static string CarImageUpdated = "The car photo has been successfully updated.";
        public static string CarImageDeleted = "Car photo deleted successfully.";
        public static string CarImagesListed = "Car photos listed successfully.";
        public static string ErrorAddCarImage = "There are already too many photos of the car.";
        public static string ErrorNoCarImage = "There are no photos of the car.";

        public static string ErrorNoSuchData = "There is no data left to delete.";

        public static string AuthorizationDenied = "Authorization not accepted.";

        public static string UserRegistered = "Registration Successful.";
        public static string UserNotFound = "User not found.";
        public static string PasswordError = "Password error";
        public static string SuccessfulLogin = "Login successful.";
        public static string UserAlreadyExists = "The user already exists.";
        public static string AccessTokenCreated = "Access token created.";
    }
}