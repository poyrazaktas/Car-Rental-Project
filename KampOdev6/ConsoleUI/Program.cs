using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using DataAccess.Concrete.InMemory;
using Entities.Concrete;
using System;

namespace ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {
            //InMemoryCarTest();
            //EfCarTest();
            //EfBrandTest();
            //EfColorTest();
            Console.WriteLine("Araba\tRenk\tGünlük Kirası\tAçıklama\n");
            CarManager carManager = new CarManager(new EfCarDal());
            foreach (var carDetail in carManager.GetCarDetails())
            {
                Console.WriteLine(carDetail.BrandName +"\t"+carDetail.CarColor
                    +"\t"+carDetail.CarDailyPrice.ToString()+"\t\t"+carDetail.CarDescription);
            }

        }

        private static void EfBrandTest()
        {
            BrandManager brandManager = new BrandManager(new EfBrandDal());
            foreach (var brand in brandManager.GetAll())
            {
                Console.WriteLine(brand.Name);
            }
        }

        private static void EfColorTest()
        {
            ColorManager colorManager = new ColorManager(new EfColorDal());
            foreach (var color in colorManager.GetAll())
            {
                Console.WriteLine(color.Name);
            }
        }

        private static void EfCarTest()
        {
            CarManager carManager = new CarManager(new EfCarDal());
            carManager.Add(new Car { Id = 7, Description = "aanana", DailyPrice = -5 });
            Console.WriteLine("\n");
            foreach (var car in carManager.GetAll())
            {
                Console.WriteLine(car.Description + "\nGünlük Kirası: " + car.DailyPrice);
            }
            Console.WriteLine("\nSiyah Renkli Arabalar\n");
            foreach (var car in carManager.GetAllByColorId(2))
            {
                Console.WriteLine(car.Description + "\nGünlük Kirası: " + car.DailyPrice);
            }
        }

        private static void InMemoryCarTest()
        {
            CarManager carManager = new CarManager(new InMemoryCarDal());
            foreach (var car in carManager.GetAllByModelYear(2019))
            {
                Console.WriteLine(car.Description + "\nGünlük Kirası: " + car.DailyPrice);
            }
        }
    }
}
