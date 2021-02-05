using Business.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class CarManager : ICarService
    {
        ICarDal _carDal;
        public CarManager(ICarDal carDal)
        {
            _carDal = carDal;
        }

        public void Add(Car car)
        {
            try
            {
                if (car.Description.Length>=2 && car.DailyPrice>0)
                {
                    _carDal.Add(car);

                }
                else
                {
                    throw new Exception("Araç Açıklaması 2 karakterden fazla olmalı!\nAracın Günlük Kirası 0' dan fazla olmalı");
                }

            }
            catch (Exception exception)
            {

                Console.WriteLine(exception.Message);
            }
        }

        public void Delete(Car car)
        {
            _carDal.Delete(car);
        }
        public void Update(Car car)
        {
            _carDal.Update(car);
        }
        public List<Car> GetAll()
        {
            return _carDal.GetAll();
        }

        public List<Car> GetAllByModelYear(int year)
        {
            return _carDal.GetAll(c => c.ModelYear == year);
        }

        public List<Car> GetAllByColorId(int id)
        {
            return _carDal.GetAll(c => c.ColorId == id);

        }

        public List<Car> GetAllByBrandId(int id)
        {
            return _carDal.GetAll(c => c.BrandId == id);
        }
    }
}
