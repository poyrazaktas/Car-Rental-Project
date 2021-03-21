using Core.Utils.Results;
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
        IDataResult<List<Car>> GetAll();

        IDataResult<List<Car>> GetAllByModelYear(int year);

        IDataResult<List<Car>> GetAllByColorId(int id);

        IDataResult<List<Car>> GetAllByBrandId(int id);

        IDataResult<List<CarDetailDto>> GetCarDetails();

        IDataResult<List<CarDetailDto>> GetCarDetailsByCarId(int id);

        IDataResult<List<CarDetailDto>> GetCarDetailsByBrandId(int id);

        IDataResult<List<CarDetailDto>> GetCarDetailsByColorId(int id);

        IResult Add(Car car);

        IResult Update(Car car);

        IResult Delete(Car car);
    }
}