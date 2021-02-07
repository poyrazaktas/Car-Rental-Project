using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Business.Abstract
{
    public interface ICarService
    {
        List<Car> GetAll();
        List<Car> GetAllByModelYear(int year);
        List<Car> GetAllByColorId(int id);
        List<Car> GetAllByBrandId(int id);
        List<CarDetailDto> GetCarDetails();
        void Add(Car car);
        void Update(Car car);
        void Delete(Car car);

    }
}
