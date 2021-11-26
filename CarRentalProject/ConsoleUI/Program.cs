using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using DataAccess.Concrete.InMemory;
using Entities.Concrete;
using System;

namespace ConsoleUI
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            //InMemoryCarTest();

            //EfCarTest();
            //EfBrandTest();
            //EfColorTest();

            //CarDetailTest();

            //CarAddToDbTest();
            //CarUpdateTest();
            //CarDeleteTest();

            //RentalDetailTest();
            RentalAddToDbTest();
            RentalDetailTest();
        }

        private static void RentalAddToDbTest()
        {
            RentalManager rentalManager = new RentalManager(new EfRentalDal());
            var result = rentalManager.Add(new Rental
            {
                CarId = 4,
                CustomerId = 3,
                RentDate = DateTime.Today,
                ReturnDate = null,
            });
            Console.WriteLine(result.Message);
        }

        private static void RentalDetailTest()
        {
            RentalManager rentalManager = new RentalManager(new EfRentalDal());
            var result = rentalManager.GetRentalDetails();
            Console.WriteLine("Name surname\tBrand\t\tDaily Rental\tRental Date\t\tReturn Date\n");
            foreach (var rentalDetail in result.Data)
            {
                Console.WriteLine(rentalDetail.CustomerFirstName + " " +
                    rentalDetail.CustomerLastName + "\t" + rentalDetail.BrandName + "\t\t"
                    + rentalDetail.CarDailyPrice.ToString() + "\t\t" + rentalDetail.RentDate.ToString()
                    + "\t" + rentalDetail.ReturnDate.ToString());
            }
            Console.WriteLine(result.Message);
        }

        private static void CarDeleteTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            var result = carManager.Delete(new Car { Id = 7, BrandId = 27, ColorId = 3, DailyPrice = 200, ModelYear = 2018, Description = "Kocaeli - Istanbul / Mazda 3 for Rent 200 TL per day" });
            Console.WriteLine(result.Message);
            Console.WriteLine("Car\tColour\tDaily Rental\texplanation\n");
            foreach (var carDetail in carManager.GetCarDetails().Data)
            {
                Console.WriteLine(carDetail.BrandName + "\t" + carDetail.CarColor
                    + "\t" + carDetail.CarDailyPrice.ToString() + "\t\t" + carDetail.CarDescription);
            }
        }

        private static void CarUpdateTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            var result = carManager.Update(new Car { Id = 7, BrandId = 27, ColorId = 3, DailyPrice = 200, ModelYear = 2018, Description = "Kocaeli - Istanbul / Mazda 3 for Rent 200 TL per day" });
            Console.WriteLine(result.Message);
            Console.WriteLine("Car\tColour\tDaily Rental\texplanation\n");

            foreach (var carDetail in carManager.GetCarDetails().Data)
            {
                Console.WriteLine(carDetail.BrandName + "\t" + carDetail.CarColor
                    + "\t" + carDetail.CarDailyPrice.ToString() + "\t\t" + carDetail.CarDescription);
            }
        }

        private static void CarAddToDbTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            var result = carManager.Add(new Car { Id = 7, BrandId = 27, ColorId = 3, DailyPrice = 110, ModelYear = 2004, Description = "Kocaeli - Istanbul / Mazda 3 for Rent 100 TL per day" });
            //As I was wondering about your message according to whether it was successful or unsuccessful.
            Console.WriteLine(result.Message);
            Console.WriteLine("Car\tColour\tDaily Rental\texplanation\n");

            foreach (var carDetail in carManager.GetCarDetails().Data)
            {
                Console.WriteLine(carDetail.BrandName + "\t" + carDetail.CarColor
                    + "\t" + carDetail.CarDailyPrice.ToString() + "\t\t" + carDetail.CarDescription);
            }
        }

        private static void CarDetailTest()
        {
            Console.WriteLine("Car\tColour\tDaily Rental\texplanation\n");
            CarManager carManager = new CarManager(new EfCarDal());
            foreach (var carDetail in carManager.GetCarDetails().Data)
            {
                Console.WriteLine(carDetail.BrandName + "\t" + carDetail.CarColor
                    + "\t" + carDetail.CarDailyPrice.ToString() + "\t\t" + carDetail.CarDescription);
            }
        }

        private static void EfBrandTest()
        {
            BrandManager brandManager = new BrandManager(new EfBrandDal());
            foreach (var brand in brandManager.GetAll().Data)
            {
                Console.WriteLine(brand.Name);
            }
        }

        private static void EfColorTest()
        {
            ColorManager colorManager = new ColorManager(new EfColorDal());
            foreach (var color in colorManager.GetAll().Data)
            {
                Console.WriteLine(color.Name);
            }
        }

        private static void EfCarTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            carManager.Add(new Car { Id = 7, Description = "aanana", DailyPrice = -5 });
            Console.WriteLine("\n");
            foreach (var car in carManager.GetAll().Data)
            {
                Console.WriteLine(car.Description + "\nDaily Rental: " + car.DailyPrice);
            }
            Console.WriteLine("\nBlack Color Cars\n");
            foreach (var car in carManager.GetAllByColorId(2).Data)
            {
                Console.WriteLine(car.Description + "\nDaily Rental: " + car.DailyPrice);
            }
        }

        private static void InMemoryCarTest()
        {
            CarManager carManager = new CarManager(new InMemoryCarDal());
            foreach (var car in carManager.GetAllByModelYear(2019).Data)
            {
                Console.WriteLine(car.Description + "\nDaily Rental: " + car.DailyPrice);
            }
        }
    }
}