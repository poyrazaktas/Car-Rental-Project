using Business.Concrete;
using DataAccess.Concrete.InMemory;
using Entities.Concrete;
using System;

namespace ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {
            CarManager carManager = new CarManager(new InMemoryCarDal());
            foreach (var car in carManager.GetAll())
            {
                Console.WriteLine(car.Description+ "\nGünlük Kirası: "+ car.DailyPrice);
            }

            Car car2 = carManager.GetById(2);
            Console.WriteLine("\n\nId'si 2 olan Arabanın Kirası: "+ car2.DailyPrice);
            Console.WriteLine("Bu arabanın kirasını 200 tl' ye güncellendikten sonra:\n\n");
            car2.DailyPrice = 200;
            carManager.Update(car2);
            //Kira güncellendikten sonra tüm arabaların listelenmesi
            foreach (var car in carManager.GetAll())
            {
                Console.WriteLine(car.Description + "\nGünlük Kirası: " + car.DailyPrice);
            }
        }
    }
}
