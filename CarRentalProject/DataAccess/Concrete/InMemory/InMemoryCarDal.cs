﻿using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Concrete.InMemory
{
    public class InMemoryCarDal : ICarDal
    {
        private List<Car> _cars;

        public InMemoryCarDal()
        {
            _cars = new List<Car>
            {
                new Car{Id=1,BrandId=1,ColorId=1,ModelYear=2017,DailyPrice=150,Description="4X4 DIESEL MANUAL DACIA DUSTER, MAINTAINED AT LOW KM"},
                new Car{Id=2,BrandId=2,ColorId=1,ModelYear=2019,DailyPrice=133,Description="KRALIK SIFIR KM RENAULT SYMBOL"},
                new Car{Id=3,BrandId=3,ColorId=2,ModelYear=2019,DailyPrice=750,Description="ULTRA VIP MERCEDES VITO WITH DRIVER PAMP YOUR LOVED ONES"},
                new Car{Id=4,BrandId=2,ColorId=1,ModelYear=2012,DailyPrice=112,Description="112 TL DAILY RENTAL RENAULT CLIO5 GASOLINE DELIVERY TO ADDRESS"},
                new Car{Id=5,BrandId=3,ColorId=1,ModelYear=2015,DailyPrice=400,Description="LUXURIOUS VEHICLES FOR RENT MERCEDES *C-180*2015 NEW MODEL*FUL+FUL"},
            };
        }

        public void Add(Car car)
        {
            _cars.Add(car);
        }

        public void Delete(Car car)
        {
            Car carToRemove = _cars.SingleOrDefault(c => c.Id == car.Id);
            _cars.Remove(carToRemove);
        }

        public Car Get(Expression<Func<Car, bool>> filter)
        {
            var expression = filter.Compile();
            var car = _cars.SingleOrDefault(expression);
            return car;
        }

        public List<Car> GetAll(Expression<Func<Car, bool>> filter = null)
        {
            var expression = filter.Compile();
            return filter == null ? _cars : _cars.Where(expression).ToList();
        }

        public List<CarDetailDto> GetCarDetails(Expression<Func<CarDetailDto, bool>> filter = null)
        {
            Console.WriteLine("SQL operations cannot be performed in InMemory.");
            return null;
        }

        public void Update(Car car)
        {
            Car carToUpdate = _cars.SingleOrDefault(c => c.Id == car.Id);
            carToUpdate.BrandId = car.BrandId;
            carToUpdate.ColorId = car.ColorId;
            carToUpdate.DailyPrice = car.DailyPrice;
            carToUpdate.Description = car.Description;
            carToUpdate.ModelYear = car.ModelYear;
        }
    }
}