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
            //CarManager carManager = new CarManager(new InMemoryCarDal());
            //foreach (var car in carManager.GetAllByModelYear(2019))
            //{
            //    Console.WriteLine(car.Description+ "\nGünlük Kirası: "+ car.DailyPrice);
            //}
            CarManager carManager = new CarManager(new EfCarDal());
            carManager.Add(new Car {Id=7,Description="aanana",DailyPrice=-5});
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
    }
}
