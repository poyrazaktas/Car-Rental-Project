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
            Console.WriteLine("İsim Soyisim\tMarka\t\tGünlük Kira\tKiralama Tarihi\t\tİade Tarihi\n");
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
            var result = carManager.Delete(new Car { Id = 7, BrandId = 27, ColorId = 3, DailyPrice = 200, ModelYear = 2018, Description = "Kocaeli - İstanbul / Günlük 200 TL Kiralik Mazda 3" });
            Console.WriteLine(result.Message);
            Console.WriteLine("Araba\tRenk\tGünlük Kirası\tAçıklama\n");
            foreach (var carDetail in carManager.GetCarDetails().Data)
            {
                Console.WriteLine(carDetail.BrandName + "\t" + carDetail.CarColor
                    + "\t" + carDetail.CarDailyPrice.ToString() + "\t\t" + carDetail.CarDescription);
            }
        }

        private static void CarUpdateTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            var result = carManager.Update(new Car { Id = 7, BrandId = 27, ColorId = 3, DailyPrice = 200, ModelYear = 2018, Description = "Kocaeli - İstanbul / Günlük 200 TL Kiralik Mazda 3" });
            Console.WriteLine(result.Message);
            Console.WriteLine("Araba\tRenk\tGünlük Kirası\tAçıklama\n");

            foreach (var carDetail in carManager.GetCarDetails().Data)
            {
                Console.WriteLine(carDetail.BrandName + "\t" + carDetail.CarColor
                    + "\t" + carDetail.CarDailyPrice.ToString() + "\t\t" + carDetail.CarDescription);
            }
        }

        private static void CarAddToDbTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            var result = carManager.Add(new Car { Id = 7, BrandId = 27, ColorId = 3, DailyPrice = 110, ModelYear = 2004, Description = "Kocaeli - İstanbul / Günlük 100 TL Kiralik Mazda 3" });
            //Başarılı veya başarısız olmasına göre mesajını merak ettiğim için
            Console.WriteLine(result.Message);
            Console.WriteLine("Araba\tRenk\tGünlük Kirası\tAçıklama\n");

            foreach (var carDetail in carManager.GetCarDetails().Data)
            {
                Console.WriteLine(carDetail.BrandName + "\t" + carDetail.CarColor
                    + "\t" + carDetail.CarDailyPrice.ToString() + "\t\t" + carDetail.CarDescription);
            }
        }

        private static void CarDetailTest()
        {
            Console.WriteLine("Araba\tRenk\tGünlük Kirası\tAçıklama\n");
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
                Console.WriteLine(car.Description + "\nGünlük Kirası: " + car.DailyPrice);
            }
            Console.WriteLine("\nSiyah Renkli Arabalar\n");
            foreach (var car in carManager.GetAllByColorId(2).Data)
            {
                Console.WriteLine(car.Description + "\nGünlük Kirası: " + car.DailyPrice);
            }
        }

        private static void InMemoryCarTest()
        {
            CarManager carManager = new CarManager(new InMemoryCarDal());
            foreach (var car in carManager.GetAllByModelYear(2019).Data)
            {
                Console.WriteLine(car.Description + "\nGünlük Kirası: " + car.DailyPrice);
            }
        }
    }
}