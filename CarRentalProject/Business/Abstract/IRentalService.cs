using Core.Utils.Results;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IRentalService
    {
        IDataResult<List<Rental>> GetAll();

        IDataResult<List<RentalDetailDto>> GetRentalDetails();

        IResult Add(Rental rental);

        IResult Update(Rental rental);

        IResult Delete(Rental rental);

        IResult CheckIfCarReturned(int carId);
    }
}