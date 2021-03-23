using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfCarDal : EfCarRentalRepositoryBase<Car, CarRentalContext>, ICarDal
    {
        public List<CarDetailDto> GetCarDetails(Expression<Func<CarDetailDto, bool>> filter = null)
        {
            using (CarRentalContext context = new CarRentalContext())
            {
                var result = from car in context.Cars
                             join brand in context.Brands
                             on car.BrandId equals brand.Id
                             join color in context.Colors
                             on car.ColorId equals color.Id
                             select new CarDetailDto
                             {
                                 CarId = car.Id,
                                 BrandId = car.BrandId,
                                 ColorId = car.ColorId,
                                 ModelYear = car.ModelYear,
                                 BrandName = brand.Name,
                                 CarColor = color.Name,
                                 CarDailyPrice = car.DailyPrice,
                                 CarDescription = car.Description
                             };

                return filter == null ? result.ToList() : result.Where(filter).ToList();
            }
        }
    }
}