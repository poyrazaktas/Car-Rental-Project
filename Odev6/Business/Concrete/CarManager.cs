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
            //Çeşitli iş kurallarından geçtiğini varsayıyoruz.
            _carDal.Add(car);
        }

        public void Delete(Car car)
        {
            //Çeşitli iş kurallarından geçtiğini varsayıyoruz.
            _carDal.Delete(car);
        }

        public List<Car> GetAll()
        {
            //Çeşitli iş kurallarından geçtiğini varsayıyoruz.
            return _carDal.GetAll();
        }

        public Car GetById(int id)
        {
            //Çeşitli iş kurallarından geçtiğini varsayıyoruz.
            return _carDal.GetById(id);

        }

        public void Update(Car car)
        {
            //Çeşitli iş kurallarından geçtiğini varsayıyoruz.
            _carDal.Update(car);
        }
    }
}
